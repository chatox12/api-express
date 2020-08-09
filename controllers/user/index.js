'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
const { urlencoded } = require('body-parser')
const services = require('../../services')
/* function get all administrators users */
function getAllUser(req, res) {
    models.User.findAll().then(users => {
        return res.status(200).send({ message: users })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los usuarios${error}` })
    })
}

/* function get one administrator user*/
function getUser(req, res) {
    models.User.findAll({
        where: {
            code: req.params.code
        }
    }).then(user => {
        return res.status(200).send({ message: user })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los usuarios${error}` })
    })
}

/* function post, create one administrator user  */
function postUser(req, res) {
    models.User.create(req.body).then(() => {
        return res.status(200).send({ message: `Se ha creado correctamente el usuario` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al crear el usuario: ${error}` })
    })


}

/* function put(patch), update one adminitrator user using code */
function putUser(req, res) {
    models.User.update(req.body, { where: { code: req.params.code } }).then((update) => {
        return res.status(200).send({ message: `Se ha actualizado correctamente el usuario` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el usuario ${error}` })
    })
}

async function singIn(req, res) {
    try {

        let users = await models.User.findAll({ where: { user: req.body.user, password: req.body.password, state: 1 } })
        let usersAdmin = await models.AdministratorUser.findAll({ where: { user: req.body.user, password: req.body.password, state: 1 } })

        if (users.length > 0 && usersAdmin.length === 0) {
            req.user = users
            return res.status(200).send({ token: services.createToken(users, 1) })
        } else if (users.length === 0 && usersAdmin.length > 0) {
            return res.status(200).send({ token: services.createToken(usersAdmin, 2) })
        } else {
            return res.status(404).send({ message: `Usurio o contraseña incorrectos...` })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: `Error al buscar el usuario: ${error} ` })
    }
}

module.exports = {
    getAllUser, getUser,
    postUser, singIn,
    putUser
}


