// const express = require('express');
// const session = require('express-session')
// const passport = require('passport');
// const WebAppStrategy = require("ibmcloud-appid").WebAppStrategy;
// const CALLBACK_URL = "/ibm/cloud/appid/callback";

// const app = express();
// app.use(session({
//    secret: "123456",
//    resave: true,
//    saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new WebAppStrategy({
//     tenantId: "{tenant-id}",
//     clientId: "{client-id}",
//     secret: "{secret}",
//     oauthServerUrl: "{oauth-server-url}",
//     redirectUri: "{app-url}" + CALLBACK_URL
//   }));

//   passport.serializeUser(function(user, cb) {
//     cb(null, user);
//     });

//    passport.deserializeUser(function(obj, cb) {
//     cb(null, obj);
//     });
