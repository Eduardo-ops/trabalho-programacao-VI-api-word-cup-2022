const teamDB = []

const createTeam = team => {
    teamDB.push(team)
}

const getAllTeams = () => teamDB

const updateTeam = (id, team) => {
    const teamId = teamDB.findIndex(
        team => team.id == id
    )

    if (teamId > -1) {
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