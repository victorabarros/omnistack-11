const express = require('express');
const routes = require('./routes');
// TODO: uninstall body-parser

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);
