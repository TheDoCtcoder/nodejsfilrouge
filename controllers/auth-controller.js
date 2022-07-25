
const User = require ('../models/user-model')
const argon2 = require('argon2');


const authController = {
    login: async (req, res) => {
        const { credential, password } = req.body;
        const  credentialFilter = {$or : [{email : credential}, {pseudo : credential}]}
        const user = await User.findOne(credentialFilter);
        if (!user) {
            return res.status(401).json({error : 'Bad credentials'})
        }
        const isPasswordValid = await argon2.verify(user.password, password)
        if(!isPasswordValid){
            return res.status(401).json({error : 'Bad credentials'})
        }
        return res.json({msg : "Vous êtes bien connecté.e"});
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
        res.status(200).json(userToInsert);
    }
}

module.exports = authController;