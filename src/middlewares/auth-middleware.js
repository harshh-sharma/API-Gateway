const { StatusCodes } = require("http-status-codes");
const { AuthService } = require("../service");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");

async function checkAuth(req,res,next){
    try {
        const response = await AuthService.isAuthenticated(req.headers['x-access-token']);
        
        if(response){
            req.user = response;
            next();
        }
        
    } catch (error) {
        ErrorResponse.error = error;
        if(error instanceof AppError){
            return res.status(error.statusCode).json(ErrorResponse);
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    
    }
}

module.exports = {
    checkAuth
}