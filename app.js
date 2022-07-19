// // Pour utiliser dotenv, on doit l'importer
// let dotenv = require("dotenv-flow");
// // pour charger tous nos fichiers .env.
// dotenv.config();

//ou
require('dotenv-flow').config();
// console.log(process.env);

const {MESSAGE, NODE_ENV, PORT} = process.env;
console.log('Lancé en ', NODE_ENV, ' : ', MESSAGE);
const express = require('express');
const app = express();



app.get('/Users', (req, res) => {
    const data  = {
        msg : 'Coucou'
    }
    res.json(data);
})




app.listen(PORT, () => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
})


