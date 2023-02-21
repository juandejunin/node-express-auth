"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _package = _interopRequireDefault(require("../package.json"));
var _product = _interopRequireDefault(require("./routes/product.routes"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _user = _interopRequireDefault(require("./routes/user.routes"));
var _initialSetup = require("./libs/initialSetup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]);
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    nombre: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
});
app.use('/api/products', _product["default"]);
app.use("/api/auth", _authRoutes["default"]);
app.use('/api/user', _user["default"]);
var _default = app;
exports["default"] = _default;