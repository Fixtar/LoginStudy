const mysql = require("mysql2/promise");

exports.createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "db_auth",
  });

  return connection;
};
