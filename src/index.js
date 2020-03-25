const express = require('express');
const routes = require('./routes');
// Deveria ser possível acessar o body sem o pacote abaixo.
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(3333);
