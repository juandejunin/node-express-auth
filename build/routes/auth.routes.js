"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controllers");
var _verifySignup = require("../middlewares/verifySignup");
var router = (0, _express.Router)();
router.post('/signin', _auth.signin);
router.post('/signup', _verifySignup.checkExistingUser, _auth.signUp);
var _default = router;
exports["default"] = _default;