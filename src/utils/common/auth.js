const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require("../../config");

async function validatePassword(actualPassword,enteredPassword){
    return bcrypt.compareSync(enteredPassword,actualPassword);
}

async function generateToken(data){
    return jwt.sign(
        {id:data?.id,email:data?.email},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRY}  
    )
}


module.exports = {
    validatePassword,
    generateToken
}