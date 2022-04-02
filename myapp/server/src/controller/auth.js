const { Router } = require("express");
const { asyncRoute } = require("../util");

exports.createAuthRouter = (db) => {
  const router = Router();

  router.post(
    "/login",
    asyncRoute(async (req, res) => {
      const id = req.body.id;
      const pw = req.body.pw;

      console.log(db);

      const result = await db.execute(
        "SELECT * FROM user WHERE `user_id`=? AND `user_pw`=?",
        [id, pw],
        (err, result1) => {
          console.log(result1);
          res.json(JSON.stringify(result1));
        }
      );

      if (result) {
        res.json(JSON.stringify(result));
      }
    })
  );

  router.post(
    "/join",
    asyncRoute(async (req, res) => {
      const id = req.body.id;
      const pw = req.body.pw;

      console.log(db);

      const result = await db.execute(
        `INSERT INTO user (id,user_id,user_pw) VALUES(NULL,? ,?)`,
        [id, pw]
      );

      if (result) {
        res.json({ message: JSON.stringify(result) });
      }
    })
  );

  return router;
};
