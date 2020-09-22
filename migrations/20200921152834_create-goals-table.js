
exports.up = async knex => {
    await knex.schema.createTable('goals', table =>{
        table.increments('id')
        table.string('description')
        table.integer('user_id').references('id').inTable('user')
    })
  };
  
  exports.down = async knex => {
    await knex.schema.dropTableIfExists('goals')
  };
