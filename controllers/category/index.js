'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
/* function get all administrators users */
function getAllCategory(req, res) {
    models.Category.findAll().then(Categorys => {
        return res.status(200).send({ message: Categorys })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar la categoria ${error}` })
    })
}

/* function get one administrator Category*/
function getCategory(req, res) {
    models.Category.findAll({
        where: {
            code: req.params.code
        }
    }).then(Category => {
        return res.status(200).send({ message: Category })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar la categoria ${error}` })
    })
}

/* function post, create one administrator Category  */
function postCategory(req, res) {
    models.Category.create(req.body).then(() => {
        return res.status(200).send({ message: `Se ha creado correctamente la categoria` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al crear la categoria: ${error}` })
    })


}

/* function put(patch), update one adminitrator Category using code */
function putCategory(req, res) {
    models.Category.update(req.body, { where: { code: parseInt(req.params.code) } }).then(() => {
        return res.status(200).send({ message: `Se ha actualizado correctamente la categoria` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar la categoria ${error}` })
    })
}

module.exports = {
    getAllCategory, getCategory,
    postCategory,
    putCategory
}


