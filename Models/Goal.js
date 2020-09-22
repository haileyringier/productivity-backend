const { Model } = require('objection')
const database = require('../database')
const User = require('./User')

Model.knex(database)

module.exports = class Goal extends Model {
    static get tableName() {
        return 'goals'
    }

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'goals.user_id',
                to: 'users.id'
            }
        }
    }
}