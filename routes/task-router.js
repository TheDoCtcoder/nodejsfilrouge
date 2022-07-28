// const express = require('express');
// const taskRouter = express.Router();

const taskController = require('../controllers/task-controller');
const bodyValidation = require('../middlewares/body-validation');
const idValidator = require('../middlewares/idValidator');
const authentication = require('../middlewares/auth-jwt-middleware')
// const taskValidator = require('../validators/task-validator');
const {insertTaskValidator, updateTaskValidator} = require('../validators/task-validator');

// ou
const taskRouter = require('express').Router();

taskRouter.get('/',authentication(), taskController.getAll);


taskRouter.get('/:id',authentication(),idValidator(), taskController.getById);


taskRouter.get('/category/:id', taskController.getByCategory);


taskRouter.get('/user/:id', authentication(), taskController.getByUser);



taskRouter.post('/',authentication(), bodyValidation(insertTaskValidator), taskController.Create);


taskRouter.put('/:id', authentication(), idValidator(),bodyValidation(updateTaskValidator), taskController.Update);


taskRouter.delete('/:id',authentication(["Admin"]), idValidator(), taskController.Delete);








module.exports = taskRouter;

