const express = require("express");
const router = express.Router();
const user = require("./db");
// const mfa = require("./mfa");

module.exports = (params) => {
  router.use("/user", user(params));
  //   router.use("/appid/login", mfa(params));

  return router;
};
