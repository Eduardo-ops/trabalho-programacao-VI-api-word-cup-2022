const express = require('express')
const router = express.Router()
const matchController = require('../controllers/matches.controller')

router.post('', matchController.createMatch)
router.get('', matchController.getAllMatches)
router.put('/:id', matchController.updateMatch)
router.delete('/:id', matchController.removeMatch)

module.exports = router