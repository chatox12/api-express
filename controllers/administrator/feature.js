'use strict'
const models = require('../../models/mysql');

/* function from validate user name */
function validateExistUsers(userName) {
    return new Promise((resolve, reject) => {
        models.AdministratorUser.findAndCountAll({ where: { user: userName } }).then(user => {
            resolve(user)
        }).catch(error => {
            reject({ status: 500, message: `Error al verificar el usuario: ${error}` })
        })
    })
}


module.exports = {
    validateExistUsers
}