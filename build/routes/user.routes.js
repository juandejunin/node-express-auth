"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _user = require("../controllers/user.controllers");
var _authJwt = require("../middlewares/authJwt");
var _middlewares = require("../middlewares");
var router = (0, _express.Router)();
router.post('/', _authJwt.verifyToken, _authJwt.isAdmin, _middlewares.checkExistingRole, _user.createUser);
var _default = router;
exports["default"] = _default;