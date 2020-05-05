const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');

// Configurações
    // Banco de Dados
require('./database/database');

    //Engine e frontend
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.use(express.static('public'));
//app.use(expressLayouts);

    //BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Carregar Rotas
const index = require('./routes/index')

//Rotas
app.use('/', index);

module.exports = app;