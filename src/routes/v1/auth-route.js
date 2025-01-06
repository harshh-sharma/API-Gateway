const express = require("express");
const { AuthController } = require("../../controller");

const userRouter = express.Router();

userRouter.route("/").post(AuthController.signup);

module.exports = userRouter;