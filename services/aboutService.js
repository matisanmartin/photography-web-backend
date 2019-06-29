const fileUtils = require('../utils/fileUtils')

const about = () => {
    return fileUtils.parseJSON('../data/about.json')
}

module.exports = {
    about
}