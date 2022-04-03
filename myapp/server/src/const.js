const dotenv = require("dotenv");

dotenv.config();

exports.PORT = process.env.PORT;
exports.privateKey = process.env.PRIVATEKEY;
