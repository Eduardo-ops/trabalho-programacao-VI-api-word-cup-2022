const matchService = require('../services/matches.service')

const createMatch = (req, res) => {
    matchService.createMatch(req.body)
    res.send('Registered match!!!')
}

const getAllMatches = (req, res) => {
    res.send(matchService.getAllMatches())
}

const updateMatch = (req, res) => {
    matchService.updateMatch(req.params.id, req.body)
    res.send('Changed match')
}

const removeMatch = (req, res) => {
    matchService.removeMatch(req.params.id)
    res.send('Deleted match')
}

module.exports = {
    createMatch,
    getAllMatches,
    updateMatch,
    removeMatch
}
