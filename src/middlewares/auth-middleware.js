const { StatusCodes } = require("http-status-codes");
const { AuthService } = require("../service");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils/errors");
const { verifyToken } = require("../utils/common/auth");

async function validateSignupRequest(req,res,next){
    const {name,email,password} = req.body;
    try {
       if(!name){
         throw new AppError("Name is required",StatusCodes.BAD_REQUEST);
       }

       if(!email){
        throw new AppError("Email is required",StatusCodes.BAD_REQUEST);
       }

       if(!password){
        throw new AppError("Password is required",StatusCodes.BAD_REQUEST);
       }
       next();
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function validateSigninRequest(req,res,next){
    try {
        const {email,password} = req.body;

        if(!email){
            throw new AppError("email is required",StatusCodes.BAD_REQUEST);
        }

        if(!password){
            throw new AppError("password is required",StatusCodes.BAD_REQUEST);
        }

        next();
    } catch (error) {
        ErrorResponse.error = error;
        if(error instanceof AppError){
            return res.status(error.statusCode).json(ErrorResponse);
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function checkAuth(req,res,next){
    try {
        const user = await AuthService.isAuthenticated(req.headers['x-access-token']);
        if(user){
            req.user = user;
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
    checkAuth,
    validateSignupRequest,
    validateSigninRequest
}