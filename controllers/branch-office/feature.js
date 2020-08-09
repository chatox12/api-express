'use strict'

const models = require('../../models/mysql')

function validateSupermarket(code) {
    return new Promise((resolve, reject) => {
        models.Supermarket.findAndCountAll({
            where: {
                code: code
            }
        }).then(supermarket => {
            return resolve(supermarket)
        }).catch(error => {
            return reject({ status: 500, message: `Error al buscar el supermercado: ${error}` })
        })
    })
}

module.exports = {
    validateSupermarket
}