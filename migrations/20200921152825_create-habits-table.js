
exports.up = async knex => {
    await knex.schema.createTable('habits', table =>{
        table.increments('id')
        table.string('title')
        table.integer('goalDays')
        table.integer('currentDays')
        table.integer('user_id').references('id').inTable('user')
    })
};
exports.down = async knex => {
    await knex.schema.dropTableIfExists('habits')
};