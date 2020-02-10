const express = require('express')
const router = express.Router()
const ControllerUser = require('../controllers/ControllerUser')


router.post('/login',ControllerUser.login)
router.post('/register', ControllerUser.register)

module.exports = router
