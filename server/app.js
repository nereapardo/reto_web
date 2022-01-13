const express = require("express");

const app = express();

const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allRoutes = require("./routes");
app.use("/api", allRoutes);

module.exports = app;
