const { Router } = require("express");
const { asyncRoute } = require("../util");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { privateKey } = require("../const");
require("dotenv").config();

const saltRounds = 10;

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

        const [result, fields] = await db.execute(
          "SELECT user_pw FROM user WHERE user_id=?",
          [id]
        );

        if (result.length >= 1) {
          if (bcrypt.compareSync(pw, result[0].user_pw)) {
            console.log("success");
            const payload = {
              tokenId: id,
              tokenPw: pw,
            };
            var token = jwt.sign(payload, process.env.privateKey);
            console.log(token);
            res.json({ accessToken: token });
          }
        } else {
          console.log("err");
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

      const hash = bcrypt.hashSync(pw, saltRounds);

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
