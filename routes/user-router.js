const userController = require('../controllers/user-controller');
const idValidator = require('../middlewares/idValidator');
const userValidator = require('../validators/user-validator');
const bodyValidation =require('../middlewares/body-validation');
const authentication = require('../middlewares/auth-jwt-middleware');

const userRouter = require('express').Router();
userRouter.get('/', userController.getAll);
userRouter.get('/:id',authentication(), idValidator(), userController.getByID);
userRouter.put('/:id', authentication(["Admin"]),idValidator(),bodyValidation(userValidator),userController.update);
userRouter.delete('/:id', authentication(["Admin"]),idValidator(),userController.delete);







module.exports = userRouter;





