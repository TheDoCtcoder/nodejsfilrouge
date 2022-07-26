// const express = require('express');
// const authRouter = express.Router();

const authController = require('../controllers/auth-controller');
const bodyValidation = require('../middlewares/body-validation');
const { registerValidator, loginValidator } = require('../validators/auth-validator');


// ou
const authRouter = require('express').Router();



authRouter.post('/login', bodyValidation(loginValidator), authController.login);


authRouter.post('/register', bodyValidation(registerValidator), authController.register);










module.exports = authRouter;





