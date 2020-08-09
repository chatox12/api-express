'use strict'

const service = require('../services')
const feature = require('./feature')
function isAuth(req, res, next) {
    /* It is compared if it has authorization */
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tiene autorizacion' })
    }

    /* If you have authorization, continue with the following process */
    const token = req.headers.authorization.split(" ")[1]
    service.decodeToken(token).then(response => {
        feature.getUser(response).then(user => {
            req.user = user
            next()
        })

    }).catch(error => {
        res.status(error.status).send({ message: error.message })
    })

}

module.exports = { isAuth }