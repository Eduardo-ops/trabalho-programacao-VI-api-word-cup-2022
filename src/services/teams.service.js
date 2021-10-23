const teamDB = []

var id = 1

const createTeam = team => {
    team.id = id
    teamDB.push(team)
    id = id + 1
}

const getAllTeams = () => teamDB

const updateTeam = (id, team) => {
    const teamId = teamDB.findIndex(
        team => team.id == id
    )

    if (teamId != -1) {
        team.id = id
        teamDB[teamId] = team
    }
}

const removeTeam = teamId => {
    const teamIndex = teamDB.findIndex(
        team => team.id == teamId
    )

    if (teamIndex > -1) {
        teamDB.splice(teamIndex, 1)
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    updateTeam,
    removeTeam
}