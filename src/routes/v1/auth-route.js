const express = require("express");
const { AuthController } = require("../../controller");

const userRouter = express.Router();

userRouter.post("/signup",AuthController.signup);
userRouter.post("/signin",AuthController.signin);

module.exports = userRouter;