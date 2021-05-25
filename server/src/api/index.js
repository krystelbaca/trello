const express = require('express')
const router = express.Router()

router
  .use('/create-card', require('./createCard'))

module.exports = router
