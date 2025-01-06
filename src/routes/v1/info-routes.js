const express = require("express");
const {InfoController} = require('../../controller');
const { checkAuth } = require("../../middlewares/auth-middleware");


const infoRouter = express.Router();

infoRouter.get('/',checkAuth,InfoController.infoController);

module.exports = infoRouter;

