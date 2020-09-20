const config = require('./knexfile')[process.env.DATABASE_URL || 'development'];
const knex = require('knex');

module.exports = knex(config);