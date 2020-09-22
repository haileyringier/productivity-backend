const { Model } = require('objection')
const database = require('../database')
const User = require('./User')

Model.knex(database)

module.exports = class Journal extends Model {
    static get tableName() {
        return 'journal'
    }

    
    static relationMappings = {

        users: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'journal.user_id',
                to: 'users.id'
            }
        }
    }
}