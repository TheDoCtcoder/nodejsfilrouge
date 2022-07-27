const userController = require('../controllers/user-controller');
const idValidator = require('../middlewares/idValidator');

const userRouter = require('express').Router();

userRouter.get('/', userController.getAll)


userRouter.get('/:id',idValidator(), userController.getByID);


// userRouter.post('/', (req,res) => {
// console.log('envoi d un  utilisateur');
// res.sendStatus(501);
// })

userRouter.put('/:id', idValidator(),userController.update);


userRouter.delete('/:id', idValidator(),userController.delete);









module.exports = userRouter;





