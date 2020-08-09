'use strict'

const app = require('./app')
const port = process.env.PORT || 3000
const Sequelize = require('sequelize')
const sequel = require('./models')

var server = app.listen(port, () => {
    console.log('ejecutando express')
})

server.setTimeout(500000)
