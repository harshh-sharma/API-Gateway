const express = require("express");
const {InfoController} = require('../../controller');

const infoRouter = express.Router();

infoRouter.get('/',InfoController.infoController);

module.exports = infoRouter;

