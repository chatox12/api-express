'use strict'

/* controller for managing TypeUsers */
const models = require('../../models/mysql')
/* function get all TypeUsers */
function getAllTypeUser(req, res) {
    models.TypeUser.findAll().then(TypeUsers => {
        return res.status(200).send({ message: TypeUsers })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los tipos de usuario ${error}` })
    })
}

/* function get one TypeUser*/
function getTypeUser(req, res) {
    models.TypeUser.findAll({
        where: {
            code: req.params.code
        }
    }).then(TypeUser => {
        return res.status(200).send({ message: TypeUser })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar el tipo de usuario ${error}` })
    })
}

/* function post, create one  TypeUser  */
function postTypeUser(req, res) {
    models.TypeUser.create(req.body).then(() => {
        return res.status(200).send({ message: `Se ha creado correctamente el tipo de usuario` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al crear el tipo de usuario : ${error}` })
    })


}

/* function put(patch), update one TypeUser using code */
function putTypeUser(req, res) {
    models.TypeUser.update(req.body, { where: { code: req.params.code } }).then((update) => {
        if (update[0] === 0)
            return res.status(400).send({ message: `No se ha actualizado el tipo de usuario` })
        else
            return res.status(200).send({ message: `Se ha actualizado correctamente el tipo de usuario` })

    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el tipo de usuario ${error}` })
    })
}

module.exports = {
    getAllTypeUser, getTypeUser,
    postTypeUser,
    putTypeUser
}


