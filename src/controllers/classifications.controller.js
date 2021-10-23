const classificationService = require('../services/classification.service')

const createClassification = (req, res) => {
    classificationService.createClassification(req.body)
    res.send('Registered classification!!!')
}

const getAllClassifications = (req, res) => {
    res.send(classificationService.getAllClassifications())
}

const updateClassification = (req, res) => {
    classificationService.updateClassification(req.params.id, req.body)
    res.send('Changed classification!!!')
}

const removeClassification = (req, res) => {
    classificationService.removeClassification(req.params.id)
    res.send('Deleted classification!!!')
}

module.exports = {
    createClassification,
    getAllClassifications,
    updateClassification,
    removeClassification
}
