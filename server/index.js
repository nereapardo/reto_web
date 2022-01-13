// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

const cors = require("cors");

// Middleware configuration
module.exports = (app) => {
  //   app.set("trust proxy", 1);
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
