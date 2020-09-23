const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000
const database = require('./database')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const saltRounds = 12
const jwt = require('jsonwebtoken')
const { Model } = require('objection')
const Habit = require('./Models/Habit')
const Event = require('./Models/Event')
const Goal = require('./Models/Goal')
const User = require('./Models/User')
const Journal = require('./Models/Journal')


Model.knex(database)
app.use(cors())
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})


app.get('/users', (request, response) => {
  User.query()
   .then(users =>  response.json(users));
})
app.post('/user', (request, response) => {

})

// habits 
app.get('/habits', (request, response) => {
  Habit.query()
   .then(habits =>  response.json(habits));
})
app.post('/habits', (request, response) => {
  const { title, goalDays, currentDays, user_id } = request.body
  Habit.query().insert({title, goalDays, currentDays, user_id})
    .then(habit => {response.json({habit})})
})

app.delete('/habits/:id', (request, response) => {
  const { id } = request.params
    Habit.query().deleteById(id)
      .then(response.json("Deleted"))
})

// journal 
app.get('/journal', (request, response) => {
  Journal.query()
   .then(entries =>  response.json(entries));
})
app.post('/journal', (request, response) => {
  const { entry, date, user_id } = request.body
  Journal.query().insert({entry, date, user_id})
    .then(journal => {response.json({journal})})
})
app.delete('/journal/:id', (request, response) => {
  const { id } = request.params
    Journal.query().deleteById(id)
      .then(response.json("Deleted"))
})

// goals 
app.get('/goals', (request, response) => {
  Goal.query()
   .then(goals =>  response.json(goals));
})
app.post('/goals', (request, response) => {
  const { description,  user_id } = request.body
  Goal.query().insert({description, user_id})
    .then(goal => {response.json({goal})})
})
app.delete('/goals/:id', (request, response) => {
  const { id } = request.params
    Goal.query().deleteById(id)
      .then(response.json("Deleted"))
})

// events
app.get('/events', (request, response) => {
  Event.query()
   .then(events =>  response.json(events));
})
app.post('/events', (request, response) => {
  const { title, content, date, startTime, endTime, user_id } = request.body
  Event.query().insert({title, content, date, startTime, endTime, user_id})
    .then(event => {response.json({event})})
})
app.delete('/events/:id', (request, response) => {
  const { id } = request.params
    Event.query().deleteById(id)
      .then(response.json("Deleted"))
})

// users
app.post('/users', (request, response) => {
  bcrypt.hash(request.body.password, saltRounds, (error, hashed_password) => {
      database('user')
          .insert({
              name: request.body.name,
              username: request.body.username,
              password_digest: hashed_password
          })
          .returning(['id','name', 'username', 'password_digest'])
          .then(newUser => response.json({ user: newUser[0]}))
  })
})
// need to fix this route
app.post('/login', (request, response) => {
  database('user')
      .where({ username: request.body.username })
      .first()
      .then(user => {
          bcrypt.compare(request.body.password, user.password_digest, (error, result) =>{
              if (result){
                  const payload = { user_id: user.id }
                  const token = jwt.sign(payload, 'secret')
                  response.json({ token })
              } else {
                  response.json({message: "Your password is incorrect"})
              }
          })
      })
})


app.delete('/users/:id', (request, response) => {
  const { id } = request.params
    User.query().deleteById(id)
      .then(response.json("Deleted"))
})






