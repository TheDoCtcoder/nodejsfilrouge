const express = require('express');
const categoryRouter = express.Router();
// ou
// const categoryRouter = require('express').Router();
const categoryController = require('../controllers/category-controller');
const authentication = require('../middlewares/auth-jwt-middleware');
const bodyValidation = require('../middlewares/body-validation');
const idValidator = require('../middlewares/idValidator');
const categoryValidator = require('../validators/category-validator');

categoryRouter.get('/', categoryController.getAll);
categoryRouter.get('/:id',idValidator(), categoryController.getById);
//Méthode post : Ajout d'un nouvel élément
categoryRouter.post('/',authentication(["User", "Moderator", "Admin"]), bodyValidation(categoryValidator), categoryController.create);
//Méthode put : Modification d'un élément en particulier
categoryRouter.put('/:id',authentication(["Admin", "Moderator"]), idValidator(),bodyValidation(categoryValidator), categoryController.update);
//Méthode delete : Suppression d'un élément en particulier
categoryRouter.delete('/:id',authentication(["Admin"]),idValidator(), categoryController.delete);


module.exports = categoryRouter;