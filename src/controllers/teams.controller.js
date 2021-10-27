const teamService = require('../services/teams.service')

const createTeam = (req, res) => {
    const name = req.body.name
    const group = req.body.group

    if (name && group) {
        teamService.createTeam(req.body)
        res.send('201 Team registered!!!')
    } else {
        res.send('400 invalid input')
    }
}

const getAllTeams = (req, res) => {
    res.send(teamService.getAllTeams())
    res.send('200 Return all teams')
}

const updateTeam = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        teamService.updateTeam(req.params.id, req.body)
        res.send('Successful operation')
    } else {
        res.send('404 invalid team id')
    }

}

const removeTeam = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        teamService.removeTeam(req.params.id)
        res.send('200 successful operation')
    } else {
        res.send('404 invalid team id')
    }

}

module.exports = {
    createTeam,
    getAllTeams,
    updateTeam,
    removeTeam
}
