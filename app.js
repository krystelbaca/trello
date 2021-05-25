const http = require('http')
const express = require('express')

const port = 3001
const host = 'localhost'

const app = express()

const validRoutes = () => {
  app.get('/')
}

validRoutes()

app.get('/', (req, res) => {
  res.send('Welcome to Trello!')
})

const server = http.createServer(app)

server.listen(port, function () {
  console.log(`Running node app on http://${host}:${port}`)
})

module.exports = app