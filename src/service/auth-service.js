const { AuthRepository } = require("../repositories");

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

module.exports = {
    signup
}