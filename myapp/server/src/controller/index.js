const { Router } = require("express");
const { createAuthRouter } = require("./auth");

exports.createControllers = async (db) => {
  const router = Router();
  router.use("/auth", createAuthRouter(db));

  return router;
};
