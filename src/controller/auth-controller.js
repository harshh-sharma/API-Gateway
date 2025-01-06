const {ErrorResponse,SuccessResponse} = require("../utils/common")

const {AuthService} = require("../service");
const { StatusCodes } = require("http-status-codes");

async function signup(req,res){
    try {
        const {name,email,password} = req.body;
        console.log("name",name,email.password);
        
        const user = await AuthService.signup({name,email,password});
        SuccessResponse.data = user;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    signup
}