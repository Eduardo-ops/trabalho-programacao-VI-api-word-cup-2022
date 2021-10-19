const teamService = require('../services/teams.service')

const createTeam = (req, res) => {
    teamService.createTeam(req.body)
    res.send('Registered team!!!')
}

const getAllTeams = (req, res) => {
    res.send(teamService.getAllTeams())
}

const updateTeam = (req, res) => {
    teamService.updateTeam(req.params.id, req.body)
    res.send('Changed team')
}

const removeTeam = (req, res) => {
    teamService.removeTeam(req.params.id)
    res.send('Deleted team')
}

module.exports = {
    createTeam,
    getAllTeams,
    updateTeam,
    removeTeam
}
