const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: ["http://localhost:3000", process.env.ORIGIN],
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
};
