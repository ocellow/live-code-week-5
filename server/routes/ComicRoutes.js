

const express = require('express')
const router = express.Router()
const ControllerComic = require('../controllers/ControllerComic')


router.get('/comics',ControllerComic.read)
router.put('/comics/:id',ControllerComic.edit)



module.exports = router
