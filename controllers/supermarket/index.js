'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
/* function get all administrators users */
function getAllSupermarket(req, res) {
    models.Supermarket.findAll().then(supermarkets => {
        return res.status(200).send({ message: supermarkets })
    }).catch(error => {
        return res.status(500).send({ message: `Error inesperado al consultar los usuarios: ${error}` })
    })
}

/* function get one administrator user*/
function getSupermarkets(req, res) {
    models.Supermarket.findAll({
        where: {
            code: req.params.code /* filter with primary key */
        }
    }).then(supermarkets => {
        return res.status(200).send({ message: supermarkets })
    }).catch(error => {
        return res.status(500).send({ message: `Error inesperado al consultar los usuarios: ${error}` })
    })
}

/* function post, create one administrator user  */
function postSupermarket(req, res) {
    models.Supermarket.create(req.body).then(() => {
        return res.status(200).send({ message: `Se ha creado correctamente el super mercado` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al crear el super mercado, ${error}` })
    })
}

/* function put(patch), update one adminitrator user using code */
function puSupermarket(req, res) {
    models.Supermarket.update(req.body, { where: { code: req.params.code } }).then((update) => {
        if (update[0] === 0)
            return res.status(200).send({ message: 'No se ha actualizado correctamente el supermercado' })
        else
            return res.status(200).send({ message: 'Se ha actualizado correctamente el supermercado' })
    }).catch(error => {
        return res.status(200).send({ message: `Error al actualizar el supermercado ${error}` })
    })
}

module.exports = {
    getAllSupermarket, getSupermarkets,
    postSupermarket,
    puSupermarket
}


