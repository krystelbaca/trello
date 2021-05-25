
const express = require('express')

const router = express.Router()

const controller = require('../controllers/createCard')

router.post('/', controller.createCard)

module.exports = router