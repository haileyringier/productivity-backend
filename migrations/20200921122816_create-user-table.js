
exports.up = async knex => {
    await knex.schema.createTable('user', table =>{
        table.increments('id')
        table.string('name')
        table.string('username')
        table.string('password_digest')
    })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('user')
};
