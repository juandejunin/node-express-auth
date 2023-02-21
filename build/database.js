"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
_mongoose["default"].set('strictQuery', true);

// import { MONGODB_URI } from "./config.js";
var BBDD_URI = process.env.BBDD_URI;
_mongoose["default"].connect(BBDD_URI).then(function (db) {
  return console.log('Db is connected');
})["catch"](function (error) {
  return console.log(error);
});
// try {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Database is connected to", db.connection.name);
// } catch (error) {
//   console.error(error.message);
// }