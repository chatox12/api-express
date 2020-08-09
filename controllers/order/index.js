'use strict'

/* controller for managing orders */
const models = require('../../models/mysql')
const feature = require('./feature')
/* function get all orders */
function getAllOrder(req, res) {
    models.Order.findAll().then(Orders => {
        return res.status(200).send({ message: Orders })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los pedidos ${error}` })
    })
}

/* function get one Order*/
function getOrder(req, res) {
    models.Order.findAll({
        where: {
            code: req.params.code
        }
    }).then(Order => {
        return res.status(200).send({ message: Order })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar el pedido ${error}` })
    })
}

/* function post, create one  Order  */
function postOrder(req, res) {
    feature.validateDataOrder(req.body.codeProduct, req.body.codeProvider).then(validate => {
        if (validate.status) {
            return res.status(validate.status).send({ message: validate.message })
        } else {
            if (validate.producto > 0 && validate.provider > 0) {
                models.Order.create(req.body).then(() => {
                    return res.status(200).send({ message: `Se ha creado correctamente el pedido` })
                }).catch(error => {
                    return res.status(500).send({ message: `Error al crear el pedido: ${error}` })
                })
            } else {
                return res.status(400).send({ message: `Error al crear el pedido, no existe el codigo del producto o no existe el proveedor` })
            }
        }
    })
}

/* function put(patch), update one Order using code */
function putOrder(req, res) {
    models.Order.update(req.body, { where: { code: parseInt(req.params.code) } }).then(() => {
        return res.status(200).send({ message: `Se ha actualizado correctamente el pedido` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el pedido ${error}` })
    })
}

module.exports = {
    getAllOrder, getOrder,
    postOrder,
    putOrder
}


