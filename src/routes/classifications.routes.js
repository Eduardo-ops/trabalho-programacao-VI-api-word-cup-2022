const express = require('express')
const router = express.Router()
const classificationController = require('../controllers/classifications.controller')

router.post('', classificationController.createClassification)
router.get('', classificationController.getAllClassifications)
router.put('/:id', classificationController.updateClassification)
router.delete('/:id', classificationController.removeClassification)

module.exports = router