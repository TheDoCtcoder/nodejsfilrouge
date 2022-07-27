// const express = require('express');
// const taskRouter = express.Router();

const taskController = require('../controllers/task-controller');

// ou
const taskRouter = require('express').Router();

taskRouter.get('/',taskController.getAll);


taskRouter.get('/:id', taskController.getById);


taskRouter.get('/category/:categoryname', taskController.getByCategory);


taskRouter.get('/user/:username', taskController.getByUser);



taskRouter.post('/', taskController.Create);


taskRouter.put('/:id', taskController.Update);


taskRouter.delete('/:id', taskController.Delete);








module.exports = taskRouter;

