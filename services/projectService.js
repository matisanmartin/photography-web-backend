const fileUtils = require('../utils/fileUtils')

const findAll = () => {
    return fileUtils.parseJSON('../data/projects.json')
}

const findById = (id) => {
    return fileUtils.parseJSON(`../data/projects_${id}.json`)
}

module.exports = {
    findAll,
    findById
}