const { Model } = require('objection')
const database = require('../database')
const Event = require('./Event')
const Habit = require('./Habit')
const Goal = require('./Goal')
const Journal = require('./Journal')

Model.knex(database);

class User extends Model {
    static get tableName() {
        return 'user'
    }

    static relationMappings = {

        events: {
            relation: Model.HasManyRelation,
            modelClass: Event,
            join: {
                from: 'users.id',
                to: 'events.user_id'
            }
        },
        goals: {
            relation: Model.HasManyRelation,
            modelClass: Goal,
            join: {
                from: 'users.id',
                to: 'goals.user_id'
            }
        },
        habits: {
            relation: Model.HasManyRelation,
            modelClass: Habit,
            join: {
                from: 'users.id',
                to: 'habits.user_id'
            }
        },
        journal: {
            relation: Model.HasManyRelation,
            modelClass: Journal,
            join: {
                from: 'users.id',
                to: 'journal.user_id'
            }
        }

    }
}
module.exports = User