const express = require("express");
const router = express.Router();
const user = require("./db");
// const mfa = require("./mfa");

module.exports = (params) => {
  router.use("/user", user(params));
  //   router.use("/appid/login", mfa(params));
  //  router.use ( function (req, res) {

  //  })
  return router;
};

module.exports = () => {
  router.get("/frontend", (req, res) => {
    console.log("Request for about page recieved");
    res.render("frontend");
  });
  return router;
};
