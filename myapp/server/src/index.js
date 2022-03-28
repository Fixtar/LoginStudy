const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./const");
const { createControllers } = require("./controller");
const { createDatabase } = require("./db");

async function createApp() {
  const app = express();

  const db = await createDatabase();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use(morgan("dev"));

  const controllers = await createControllers(db);
  app.use("/", controllers);

  return app;
}

async function main() {
  const app = await createApp();

  const port = PORT;

  app.listen(port, () => {
    console.log(`Server Started. http://localhost:${port}`);
  });
}

main();
