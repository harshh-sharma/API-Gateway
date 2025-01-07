const express = require("express");
const { AuthController } = require("../../controller");
const { AuthMiddleware } = require("../../middlewares");

const userRouter = express.Router();

userRouter.post("/signup",AuthMiddleware.validateSignupRequest,AuthController.signup);
userRouter.post("/signin",AuthMiddleware.validateSigninRequest,AuthController.signin);

module.exports = userRouter;