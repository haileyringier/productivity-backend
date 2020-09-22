const { Model } = require('objection')
const database = require('../database')
const User = require('./User')

Model.knex(database)

module.exports = class Event extends Model {
    static get tableName() {
        return 'events'
    }

    static relationMappings = {

        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'events.user_id',
                to: 'users.id'
            }
        }
    }
}