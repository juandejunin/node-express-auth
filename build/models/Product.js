"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var productSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  paymentDate: Date,
  price: {
    type: Number,
    "default": 0
  }
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Product", productSchema);
exports["default"] = _default;