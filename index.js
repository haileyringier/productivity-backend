const express = require('express')
const cors = require('cors')
const app = express()
const port = '3000'
const database = require('./database')
const bodyParser = require('body-parser')
const bcyrpt = require('bcrypt')
const saltRounds = 12
const jwt = require('jsonwebtoken')

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

app.get('/habits', (request, response) => {
  database('habit').select()
    .then(habits => response.json({habits}))
})
app.get('/journal', (request, response) => {
  database('journal').select()
    .then(journal => response.json({journal}))
})
app.get('/goals', (request, response) => {
  database('goal').select()
    .then(goals => response.json({goals}))
})
app.get('/events', (request, response) => {
  database('event').select()
    .then(events => response.json({events}))
})




