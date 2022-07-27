
const User = require ('../models/user-model');
// const jwtUtils = require('../utils/jwt-utils');
const jwtUtils = require ('../utils/jwt-utils');
const argon2 = require('argon2');


const authController = {
    login: async (req, res) => {
        const { credential, password } = req.body;
        console.log(credential,password);
        const  credentialFilter = {$or : [{email : credential}, {pseudo : credential}]}
        const user = await User.findOne(credentialFilter);
        if (!user) {
            return res.status(401).json({error : 'Bad credentials'})
        }
        const isPasswordValid = await argon2.verify(user.password, password)
        if(!isPasswordValid){
            return res.status(401).json({error : 'Bad credentials'})
        }
        const token = await jwtUtils.generate(user);
        return res.json({token});
    },
    register: async (req, res) => {
        const { pseudo, email, lastname, firstname, password } = req.body;
        const hashedPassword = await argon2.hash(password);

        const userToInsert = User({
            pseudo,
            email,
            lastname,
            firstname,
            password : hashedPassword
        });

        await userToInsert.save();
        const token = await jwtUtils.generate(userToInsert);
        res.status(200).json({token});
    }
}

module.exports = authController;