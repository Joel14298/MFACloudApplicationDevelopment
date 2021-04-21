const express = require("express");
const router = express.Router();
const user = require("./db");

module.exports = (params) => {
  router.use("/user", user(params));

  return router;
};
