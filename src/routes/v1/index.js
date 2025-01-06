const express = require("express");
const infoRouter = require("./info-routes");
const userRouter = require("./auth-route");

const v1Router = express.Router();

v1Router.use('/info',infoRouter);
v1Router.use('/users',userRouter);

module.exports = v1Router;

