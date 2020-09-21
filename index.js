const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000
const database = require('./database')
const bodyParser = require('body-parser')
const bcyrpt = require('bcrypt')
const saltRounds = 12
const jwt = require('jsonwebtoken')
const { Model } = require('objection')
const { response } = require('express')

Model.knex(database)
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})


class Habit extends Model {
  static tableName='habit'
}
class Journal extends Model {
  static tableName='journal'
}
class Event extends Model {
  static tableName='event'
}
class Goal extends Model {
  static tableName='goal'
}


// habits 
// app.get('/habits', (request, response) => {
//   database('habit').select()
//     .then(habits => response.json({habits}))
// })
app.get('/habits', (request, response) => {
  Habit.query()
    .then(habits => response.json({habits}))
})

app.post('/habits', (request, response) => {
  const habit = {
    title: request.body.title,
    goalDays: request.body.goalDays,
    currentDays: request.body.currentDays
  }
  Habit.create({habit})
  response.send({message: "habit created", habit: habit})
})
app.delete('/habits/:id', (request, response) => {
  database('habit').select().where({id: request.params.id})
    
})

// journal 
app.get('/journal', (request, response) => {
  database('journal').select()
    .then(journal => response.json({journal}))
})
app.post('/journal', (request, response) => {
  
})

// goals 
app.get('/goals', (request, response) => {
  database('goal').select()
    .then(goals => response.json({goals}))
})
app.post('/goals', (request, response) => {
  
})

// events
app.get('/events', (request, response) => {
  database('event').select()
    .then(events => response.json({events}))
})
app.post('/events', (request, response) => {
  
})

app.get('/users', (request, response) => {
  database('user').select()
    .then(users => response,json({users}))
} )




