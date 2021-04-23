const express = require("express");
const session = require("express-session");
const passport = require("passport");
const WebAppStrategy = require("ibmcloud-appid").WebAppStrategy;
const CALLBACK_URL = "/ibm/cloud/appid/callback";

const app = express();
app.use(
  session({
    secret: "123456",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new WebAppStrategy({
    tenantId: "99530204-edd4-470d-a0cd-3f73a408bb01",
    clientId: "e28fce74-2f52-4b8f-b5ca-d5deb71efd62",
    secret: "ZjUzZTU5OTQtNzRkMy00Mzc5LWEwMTItOWJkZjdiNDFjNmNh",
    oauthServerUrl:
      "https://us-south.appid.cloud.ibm.com/oauth/v4/99530204-edd4-470d-a0cd-3f73a408bb01",
    redirectUri: "http://localhost:8082/*" + CALLBACK_URL,
  })
);

app.get("/appid/callback", passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.get("/appid/logout", function (req, res) {
  WebAppStrategy.logout(req);
  res.redirect("/");
});

app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));
