const knex = require('knex');
const config = require('../../knexfile');

const conn = knex(config.development);

module.exports = conn;
