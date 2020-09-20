
exports.up = async knex => {
    await knex.schema.createTable('journal', table =>{
        table.increments('id')
        table.string('entry')
        table.date('date')
        // table.integer("user_id").references("id").inTable("user")
    })
};
  
exports.down = async knex => {
    await knex.schema.dropTableIfExists('journal')
};
