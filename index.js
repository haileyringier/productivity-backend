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
app.use(bodyParser.urlencoded({ extended: false}));

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
  Habit.query().insert({
    id: request.body.id,
    title: request.body.title, 
    goalDays: request.body.goalDays, 
    currentDays: request.body.currentDays,
    user_id: request.body.user_id
  })
  response.json("created")
})

// app.post('/habits', (request, response) => {
//   database('habits').insert({
//     title: request.body.title, 
//     goalDays: request.body.goalDays, 
//     currentDays: request.body.currentDays,
//     user_id: request.body.user_id })
//   response.send({message: "habit created", habit: habit})
// })
app.delete('/habits/:id', (request, response) => {
  // database('habits').select().where({id: request.params.id})
  //   .del()
    Habit.query().deleteById(request.params.id)
})

// journal 
app.get('/journal', (request, response) => {
  Journal.query()
   .then(entries =>  response.json(entries));
})
app.post('/journal', (request, response) => {
  
})

// goals 
app.get('/goals', (request, response) => {
  Goal.query()
   .then(goals =>  response.json(goals));
})
app.post('/goals', (request, response) => {
  
})

// events
app.get('/events', (request, response) => {
  Event.query()
   .then(events =>  response.json(events));
})
app.post('/events', (request, response) => {
  
})

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






