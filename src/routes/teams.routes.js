const express = require('express')
const router = express.Router()
const teamController = require('../controllers/teams.controller')

router.post('', teamController.createTeam)
router.get('', teamController.getAllTeams)
router.put('/:id', teamController.updateTeam)
router.delete('/:id', teamController.removeTeam)

module.exports = router