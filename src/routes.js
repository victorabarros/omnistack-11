const conn = require('./database/connection')
const express = require('express');
const OngController = require('./controller/OngController')

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;
