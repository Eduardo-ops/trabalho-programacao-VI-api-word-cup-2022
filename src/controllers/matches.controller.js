const matchService = require('../services/matches.service')

const createMatch = (req, res) => {
    const round = req.body.round
    const teams = req.body.teams
    const scoreboard = req.body.scoreboard

    if (round && teams && scoreboard) {
        matchService.createMatch(req.body)
        res.send('201 Matche registered')
    } else {
        res.send('400 invalid input')
    }
}

const getAllMatches = (req, res) => {
    res.send(matchService.getAllMatches())
    res.send('200 Return all matches')
}

const updateMatch = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        matchService.updateMatch(req.params.id, req.body)
        res.send('200 Successful operation')
    } else {
        res.send('404 invalid matches id')
    }
}

const removeMatch = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        matchService.removeMatch(req.params.id)
        res.send('200 successful operation')
    } else {
        res.send('404 invalid matches id')
    }
}

module.exports = {
    createMatch,
    getAllMatches,
    updateMatch,
    removeMatch
}
