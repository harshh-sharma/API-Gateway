const express = require("express");
const {InfoController} = require('../../controller');
const { checkAuth } = require("../../middlewares/auth-middleware");
const { AuthMiddleware } = require("../../middlewares");


const infoRouter = express.Router();

infoRouter.get('/',AuthMiddleware.checkAuth,InfoController.infoController);

module.exports = infoRouter;

