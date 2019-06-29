const express = require('express')

const aboutRouter = require('./routes/about')
const projectsRouter = require('./routes/projects')

const app = express()

app.use('/about', aboutRouter)
app.use('/projects', projectsRouter)

module.exports = app
