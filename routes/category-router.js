const express = require('express');
const categoryRouter = express.Router();
// ou
// const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category-controller');
const idValidator = require('../middlewares/idValidator');

categoryRouter.get('/', categoryController.getAll);
categoryRouter.get('/:id',idValidator(), categoryController.getById);
//Méthode post : Ajout d'un nouvel élément
categoryRouter.post('/', categoryController.create);
//Méthode put : Modification d'un élément en particulier
categoryRouter.put('/:id',idValidator(), categoryController.update);
//Méthode delete : Suppression d'un élément en particulier
categoryRouter.delete('/:id',idValidator(), categoryController.delete);


module.exports = categoryRouter;