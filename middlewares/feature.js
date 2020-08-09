'use strict'
const models = require('../models/mysql')
const typeUser = require('../controllers/type-user')

function getUser(users) {
    return new Promise((resolve, reject) => {
        if (users.typeUser === 1) {

            models.User.findOne({
                attributes: [
                    "code", "codeBranchOffice", "codeEmployee", "codeUserType"
                ],
                where: { code: users.sub }
            }).then(user => {
                user.typeUser = 'normal'
                return resolve(user)
            }).catch(error => {
                return reject({ status: 500, message: `Error al buscar el usuario: ${error}` })
            })
        }

        if (users.typeUser === 2) {
            models.AdministratorUser.findOne({
                attributes: [
                    "code", "firstName",
                    "firstLastName"
                ],
                where: {
                    code: users.sub
                }
            }).then(user => {
                user.typeUser = 'admin'
                return resolve(user)
            }).catch(error => {
                return reject({ message: `Error inesperado al consultar los usuarios: ${error}` })
            })
        }
    })
}

module.exports = { getUser }