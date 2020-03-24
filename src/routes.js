const express = require('express');

routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        "hello": "world"
    })
});

routes.get('/u/:id', (req, res) => {
    return res.json({
        "hello": id
    })
});

module.exports = routes;
