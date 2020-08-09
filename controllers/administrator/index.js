/* controller for managing administrator users */
'use strict'
const models = require('../../models/mysql')
const feature = require('./feature')
/* function get all administrators users */
function getAllUsers(req, res) {
    models.AdministratorUser.findAll().then(administrators => {
        return res.status(200).send({ message: administrators })
    }).catch(error => {
        return res.status(500).send({ message: `Error inesperado al consultar los usuarios: ${error}` })
    })
}

/* function get one administrator user*/
function getUser(req, res) {
    models.AdministratorUser.findAll({
        where: {
            code: req.params.code
        }
    }).then(administrators => {
        return res.status(200).send({ message: administrators })
    }).catch(error => {
        return res.status(500).send({ message: `Error inesperado al consultar los usuarios: ${error}` })
    })
}

/* function post, create one administrator user  */
function postUser(req, res) {
    feature.validateExistUsers(req.body.user).then(validationUser => {
        if (validationUser.count > 0) {
            return res.status(400).send({ message: `Error al crear el usuario, ya se encuentra un usuario creado con este nombre se usuario - ${req.body.user}` })
        } else {
            models.AdministratorUser.create(req.body).then(() => {
                return res.status(201).send({ message: `Se ha creado correctamente el usuario` })
            }).catch(error => {
                return res.status(500).send({ message: `Error al crear el usuario: ${error}` })
            })
        }
    }).catch(error => {
        if (error.status)
            return res.status(error.status).send({ message: error.message })
        return res.status(500).send({ message: `Error al crear el usuario: ${error}` })
    })
}

/* function put(patch), update one adminitrator user using code */
function putUser(req, res) {
    models.AdministratorUser.update(req.body, { where: { code: parseInt(req.params.code) } }).then(() => {
        return res.status(200).send({ message: `Se ha actualizado correctamente el usuario` })
    }).catch(error => {
        return res.status(512).send({ message: `Error al actualizar el usuario ${error}` })
    })
}

function userLogin(req, res) {
    models.AdministratorUser.findAndCountAll({
        where: {
            user: req.body.user,
            password: req.body.password,
            state: 1
        }
    }).then(user => {
        if (user.count === 1)
            return res.status(200).send({ message: 'usuario correcto', token: 'token1' })
        else
            return res.status(400).send({ message: 'Usuario o contraseña incorrectos' })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar el usuario ${error}` })
    })
}

module.exports = {
    getAllUsers, getUser,
    postUser, userLogin,
    putUser
}


