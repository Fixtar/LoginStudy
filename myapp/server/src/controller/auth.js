const { Router } = require("express");
const { asyncRoute } = require("../util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { privateKey } = require("../const");

const SALT_ROUND = 10;

exports.createAuthRouter = (db) => {
  const router = Router();

  router.post(
    "/login",
    asyncRoute(async (req, res) => {
      const receiveToken = req.headers.Auth;

      if (receiveToken) {
        const decoded = jwt.verify(receiveToken, privateKey);
        if (decoded) console.log("token login success");
      } else {
        const id = req.body.id;
        const pw = req.body.pw;

        const [rows, fields] = await db.execute(
          "SELECT user_pw FROM user WHERE user_id=?",
          [id]
        );

        if (rows.length !== 1) {
          res.status(500).json({ message: "뭔가 이상한데?" });
          return;
        }

        const userRow = rows[0];
        if (bcrypt.compareSync(pw, userRow.user_pw)) {
          console.log("success");
          const payload = {
            tokenId: id,
            tokenPw: pw,
          };
          var token = jwt.sign(payload, process.env.privateKey);
          console.log(token);
          res.json({ accessToken: token });
        }
      }
    })
  );

  router.post(
    "/join",
    asyncRoute(async (req, res) => {
      const id = req.body.id;
      const pw = req.body.pw;

      console.log(db);

      const hash = bcrypt.hashSync(pw, SALT_ROUND);

      const result = await db.execute(
        `INSERT INTO user (id,user_id,user_pw) VALUES(NULL,? ,?)`,
        [id, hash]
      );

      if (result) {
        res.json({ message: JSON.stringify(result) });
      }
    })
  );

  return router;
};
