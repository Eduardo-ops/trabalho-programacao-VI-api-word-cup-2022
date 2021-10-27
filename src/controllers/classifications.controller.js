const classificationService = require('../services/classification.service')

const createClassification = (req, res) => {
    const classification = req.body.classification
    const team = req.body.team

    if (classification && team) {
        classificationService.createClassification(req.body)
        res.send('201 Classification registered!!!')
    } else {
        res.send('400 invalid input')
    }
}

const getAllClassifications = (req, res) => {
    res.send(classificationService.getAllClassifications())
    res.send('Return all classifications')
}

const updateClassification = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        classificationService.updateClassification(req.params.id, req.body)
        res.send('200 Successful operation!!!')
    } else {
        res.send('404 invalid classification id')
    }

}

const removeClassification = (req, res) => {
    const id = req.body.id

    if (id != -1) {
        classificationService.removeClassification(req.params.id)
        res.send('successful operation!!!')
    } else {
        res.send('404 invalid classification id')
    }

}

module.exports = {
    createClassification,
    getAllClassifications,
    updateClassification,
    removeClassification
}
