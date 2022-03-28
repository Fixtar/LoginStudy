const { Router } = require("express");
const { asyncRoute } = require("../util");

exports.createAuthRouter = (db) => {
  const router = Router();

  router.get(
    "/login",
    asyncRoute(async (req, res) => {
      res.json({ message: "auth login api" });

      req.body.Account;
    })
  );

  router.post(
    "/join",
    asyncRoute(async (req, res) => {
      const id = req.body.id;
      const pw = req.body.pw;

      console.log(db);

      const result = await db.execute(
        `SELECT * FROM user WHERE user_id=? AND user_pw=?`,
        [id, pw]
      );

      res.json({ message: JSON.stringify(result) });
    })
  );

  return router;
};
