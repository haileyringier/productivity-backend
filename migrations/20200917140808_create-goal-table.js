
exports.up = async knex => {
  await knex.schema.createTable('goal', table =>{
      table.increments('id')
      table.string('description')
    //   table.integer("user_id").references("id").inTable("user")
  })
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists('goal')
};
