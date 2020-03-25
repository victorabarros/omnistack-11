const conn = require('../database/connection')
const express = require('express');
const OngController = require('./controller/OngController')

routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({"hello": "world"})
});

routes.get('/ongs', (req, res) => {
    // TODO: Migra listagem para o controlller com nome "index"
    const ongs = conn('ongs').select('*');
    res.json(ongs);
});
routes.post('/ongs', OngController.create);

module.exports = routes;
