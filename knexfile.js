

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres:///productivity-journal"
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: 'knex_migrations'
    }
};
