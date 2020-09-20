
exports.up = async knex => {
    await knex.schema.createTable('habit', table =>{
        table.increments('id')
        table.string('title')
        table.integer('goalDays')
        table.integer('currentDays')
        // table.integer("user_id").references("id").inTable("user")
    })
};
  
exports.down = async knex => {
    await knex.schema.dropTableIfExists('habit')
};