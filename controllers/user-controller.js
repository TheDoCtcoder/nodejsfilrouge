const User = require('../models/user-model');
const UserDTO = require('../dto/user-dto');
// const { array } = require('yup/lib/locale');
const userMapperToDTO = (user) => new UserDTO(user.id,user.pseudo,user.email,user.firstname,user.lastname);


const userController = {
    getAll : async (req, res) => {
        // const users = await User.find();
        const users = await (User.find());
        const usersDTO = users.map(userMapperToDTO); 
        res.status(200).json(usersDTO);

    },
    getByID : async (req, res) => {
        const id =req.params.id;
        const user = await User.findById(id);
        if(!user){
            return res.sendStatus(404);
        }
        const userDTO =  userMapperToDTO(user);
        res.status(200).json(userDTO);


    },
    update : async (req, res) => {
        const id = req.params.id;
        const {pseudo, email, firstname, lastname} = req.body
        const userUpdated = await User.findByIdAndUpdate(id, {
            pseudo : pseudo,
            email : email,
            firstname : firstname,
            lastname : lastname

        }, {returnDocument: 'after'});

        if(!userUpdated) {
            return res.sendStatus(404);
        }
        const userDTO = userMapperToDTO(userUpdated);
        res.status(200).json(userDTO);




    },
    delete : async (req, res) => {
        const id = req.params.id;
        const userToDelete = await User.findByIdAndDelete(id);
        if(!userToDelete){
            return res.sendStatus(404);
        }
         res.sendStatus(204);

    }


}

module.exports = userController;