const express = require('express')
const router = express.Router()
const service = require('../services/projectService')

// --> /projects

router.get('/', function(req, res) {
    res.send(service.findAll());
})

router.get('/:id', function(req, res) {
    res.send(service.findById(req.params.id))
})

module.exports = router
