const matchDB = []

const createMatch = match => {
    matchDB.push(match)
}

const getAllMatches = () => matchDB

const updateMatch = (id, match) => {
    const matchId = matchDB.findIndex(
        match => match.id == id
    )

    if (matchId > -1) {
        matchDB[matchId] = match
    }
}

const removeMatch = matchId => {
    const matchIndex = matchDB.findIndex(
        match => match.id == matchId
    )

    if (matchIndex > -1) {
        matchDB.splice(matchIndex, 1)
    }
}

module.exports = {
    createMatch,
    getAllMatches,
    updateMatch,
    removeMatch
}