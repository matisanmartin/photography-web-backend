const fs = require('fs')
const path = require('path')

const parseJSON = (filePath) => {
    return JSON.parse(fs.readFileSync(path.join(`${__dirname}/${filePath}`)).toString());
}

module.exports = {
    parseJSON
}