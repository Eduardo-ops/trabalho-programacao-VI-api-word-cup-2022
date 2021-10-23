const classificationDB = []

var id = 1

const createClassification = classification => {
    classification.id = id
    classificationDB.push(classification)
    id = id + 1
}

const getAllClassifications = () => classificationDB

const updateClassification = (id, classification) => {
    const classificationId = classificationDB.findIndex(
        classification => classification.id == id
    )

    if (classificationId != -1) {
        classification.id = id
        classificationDB[classificationId] = classification
    }
}

const removeClassification = classificationId => {
    const classificationIndex = classificationDB.findIndex(
        classification => classification.id == classificationId
    )

    if (classificationIndex > -1) {
        classificationDB.splice(classificationIndex, 1)
    }
}

module.exports = {
    createClassification,
    getAllClassifications,
    updateClassification,
    removeClassification
}