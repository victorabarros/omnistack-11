const express = require('express');
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.get('/ongs/:id/incidents', OngController.incidentsByOng);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;
