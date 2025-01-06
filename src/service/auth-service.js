const { StatusCodes } = require("http-status-codes");
const { AuthRepository } = require("../repositories");
const { AppError } = require("../utils/errors");
const { validatePassword, generateToken } = require("../utils/common/auth");



const authRepository = new AuthRepository();

async function signup(data){
    try {
        console.log("data",data);
        
        const user = await authRepository.create(data);
        return user;
    } catch (error) {
        throw error;
    }
}

async function signin(data){
    try {
        const user = await authRepository.getUserByEmail(data?.email);

        if(!user){
            throw new AppError('User are not found',StatusCodes.BAD_REQUEST);
        }

        const isPasswordValid = await validatePassword(user.password,data?.password);

        console.log(isPasswordValid);
        

        if(!isPasswordValid){
            throw new AppError('Password is not correct',StatusCodes.BAD_REQUEST);
        }

        const token = await generateToken({email:user.email,id:user.id});

        return token;
    } catch (error) {
        console.log(error);
        
        throw error;
    }
}

module.exports = {
    signup,
    signin
}