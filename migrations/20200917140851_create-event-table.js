
exports.up = async knex => {
    await knex.schema.createTable('event', table =>{
        table.increments('id')
        table.string('title')
        table.string('content')
        table.date('date')
        table.time('startTime')
        table.time('endTime')
        // table.integer("user_id").references("id").inTable("user")
    })
};

exports.down = async knex => {
    await knex.schema.dropTableIfExists('event')
};
