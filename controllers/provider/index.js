'use strict'

/* controller for managing Providers */
const models = require('../../models/mysql')
/* function get all Providers */
function getAllProvider(req, res) {
    models.Provider.findAll().then(Providers => {
        return res.status(200).send({ message: Providers })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los proveedores ${error}` })
    })
}

/* function get one Provider*/
function getProvider(req, res) {
    models.Provider.findAll({
        where: {
            code: req.params.code
        }
    }).then(Provider => {
        return res.status(200).send({ message: Provider })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar el proveedor ${error}` })
    })
}

/* function post, create one  Provider  */
function postProvider(req, res) {
    models.Provider.create(req.body).then(() => {
        return res.status(200).send({ message: `Se ha creado correctamente el proveedor` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al crear el proveedor: ${error}` })
    })


}

/* function put(patch), update one Provider using code */
function putProvider(req, res) {
    models.Provider.update(req.body, { where: { code: parseInt(req.params.code) } }).then((update) => {
        if (update[0] === 0)
            return res.status(200).send({ message: `No se ha actualizado correctamente el proveedor` })
        else
            return res.status(200).send({ message: `Se ha actualizado correctamente el proveedor` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el proveedor ${error}` })
    })
}

module.exports = {
    getAllProvider, getProvider,
    postProvider,
    putProvider
}


