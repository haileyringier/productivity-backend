const { Model } = require('objection')
const database = require('../database')
const User = require('./User')

Model.knex(database)

module.exports = class Habit extends Model {
    static get tableName() {
        return 'habits'
    }
    static relationMappings = {

        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'habits.user_id',
                to: 'user.id'
            }
        }
    }
}