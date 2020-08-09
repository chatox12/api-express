'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
const feature = require('./feature')
/* function get all administrators users */
function getAllProduct(req, res) {
    models.Product.findAll().then(products => {
        return res.status(200).send({ message: products })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los productos${error}` })
    })
}

/* function get one administrator Product*/
function getProduct(req, res) {
    models.Product.findAll({
        where: {
            code: req.params.code
        }
    }).then(product => {
        return res.status(200).send({ message: product })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar el producto${error}` })
    })
}

/* function post, create one administrator Product  */
function postProduct(req, res) {
    feature.validateFromCreateProduct(req.body).then(validate => {
        if (validate.status) {
            return res.status(validate.status).send({ message: validate.message })
        } else {
            if (validate.branch > 0 && validate.category > 0) {
                if (validate.product > 0) {
                    return res.status(400).send({ message: `El nombre del producto ya existe...` })
                } else {
                    models.Product.create(req.body).then(() => {
                        return req.status(200).send({ message: `Se ha creado correctamente el producto` })
                    }).catch(error => {
                        return res.status(500).send({ message: `Error al crear el producto: ${error}` })
                    })
                }
            } else {
                return res.status(400).send({ message: `No existe la Sucursal o la Categoria ingresada para el producto...` })
            }
        }
    })
}

/* function put(patch), update one adminitrator Product using code */
function putProduct(req, res) {
    models.Product.update(req.body, { where: { code: parseInt(req.params.code) } }).then((update) => {
        if (update[0] === 0)
            return res.status(200).send({ message: `No se pudo actualizar el producto` })
        else
            return res.status(200).send({ message: `Se ha actualizado correctamente el producto` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el producto ${error}` })
    })
}

function getAlertProduct(req, res) {
    models.Product.findAll({
        where: {
            stock: { [models.Sequelize.Op.lte]: models.Sequelize.literal(['produ_nStockMinimo']) }
        }
    }).then(product => {
        return res.status(200).send({ message: product })
    }).catch(error => {
        return res.status(200).send({ message: `Error al obtener las alertas: ${error}` })
    })
}

module.exports = {
    getAllProduct, getProduct, getAlertProduct,
    postProduct,
    putProduct
}


