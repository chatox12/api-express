'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
const feature = require('./feature')
/* function get all administrators users */
function getAllBranchOffice(req, res) {
    console.log(req.user.typeUser)
    if (req.user.typeUser === 'admin') {
        models.BranchOffice.findAll().then(branchOffices => {
            return res.status(200).send({ message: branchOffices })
        }).catch(error => {
            return res.status(500).send({ message: `Error al consultar las sucursales  ${error}` })
        })
    }
}

/* function get one administrator user*/
function getBranchOffice(req, res) {
    if (req.user.typeUser === 'admin') {
        models.BranchOffice.findAll({
            where: {
                code: req.params.code
            }
        }).then(branchOffice => {
            return res.status(200).send({ message: branchOffice })
        }).catch(error => {
            return res.status(500).send({ message: `Error al consultar la sucursal${error}` })
        })
    }

    if (req.user.typeUser === normal) {
        models.BranchOffice.findAll({
            where: {
                code: req.user.codeBranchOffice
            }
        }).then(branchOffice => {
            return res.status(200).send({ message: branchOffice })
        }).catch(error => {
            return res.status(500).send({ message: `Error al consultar la sucursal${error}` })
        })
    }
}

/* function post, create one administrator user  */
function postBranchOffice(req, res) {
    feature.validateSupermarket(req.body.codeSupermarket).then(supermarket => {
        if (supermarket.count > 0) {
            models.BranchOffice.create(req.body).then(() => {
                return res.status(200).send({ message: `Se ha creado correctamente el empleado` })
            }).catch(error => {
                return res.status(500).send({ message: `Error al crear la sucursal: ${error}` })
            })
        } else {
            return res.status(400).send({ message: `No existe el supermercado que se ha ingresado...` })
        }
    }).catch(error => {
        if (error.status)
            return res.status(error.status).send({ message: error.message })
        return res.status(500).send({ message: `Error al crear la sucursal: ${error}` })

    })


}

/* function put(patch), update one adminitrator user using code */
function putBranchOffice(req, res) {
    models.BranchOffice.update(req.body, { where: { code: parseInt(req.params.code) } }).then(() => {
        return res.status(200).send({ message: `Se ha actualizado correctamente la sucursal` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar la sucursal ${error}` })
    })
}

module.exports = {
    getAllBranchOffice, getBranchOffice,
    postBranchOffice,
    putBranchOffice
}


