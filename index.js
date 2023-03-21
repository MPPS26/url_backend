const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const cors = require('cors');
//const dbconnect = require ('./connect')
require('./connect')
const jwt = require('jsonwebtoken');



const app = express();
app.use(express.static(__dirname + '/public'))


//puerto
const PORT = process.env.PORT;
app.use(express.json());

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use (cors());


//Inicio de rutas
app.use('/api', require('./src/routes/index'))



// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'it works'
    })
});


//inicar servidor
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})


