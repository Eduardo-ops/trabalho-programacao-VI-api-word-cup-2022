const classificationDB = []

const createClassification = classification => {
    classificationDB.push(classification)
}

const getAllClassifications = () => classificationDB

const updateClassification = (id, classification) => {
    const classificationId = classificationDB.findIndex(
        classification => classification.id == id
    )

    if (classificationId > -1) {
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