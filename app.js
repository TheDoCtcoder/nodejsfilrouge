// // Pour utiliser dotenv, on doit l'importer
// let dotenv = require("dotenv-flow");
// // pour charger tous nos fichiers .env.
// dotenv.config();

//ou
require('dotenv-flow').config();
// console.log(process.env);

const {MESSAGE, NODE_ENV} = process.env;
console.log('Lancé en ', NODE_ENV, ' : ', MESSAGE);


