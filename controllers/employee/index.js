'use strict'

/* controller for managing administrator users */
const models = require('../../models/mysql')
const feature = require('./feature')
/* function get all administrators users */
function getAllEmployee(req, res) {
    models.Employee.findAll().then(employees => {
        return res.status(200).send({ message: employees })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los empleados ${error}` })
    })
}

/* function get one administrator user*/
function getEmployee(req, res) {
    models.Employee.findAll({
        where: {
            code: req.params.code
        }
    }).then(employee => {
        return res.status(200).send({ message: employee })
    }).catch(error => {
        return res.status(500).send({ message: `Error al consultar los empleados ${error}` })
    })
}

/* function post, create one administrator user  */
function postEmployee(req, res) {
    feature.validateSupermarket(req.body.codeSupermarket).then(supermarket => {
        if (supermarket.count > 0) {
            models.Employee.create(req.body).then(() => {
                return res.status(200).send({ message: `Se ha creado correctamente el empleado` })
            }).catch(error => {
                return res.status(500).send({ message: `Error al crear el usuario: ${error}` })
            })
        } else {
            return res.status(400).send({ message: `No existe el supermercado que se ha ingresado...` })
        }
    })
}

/* function put(patch), update one adminitrator user using code */
function putEmployee(req, res) {
    models.Employee.update(req.body, { where: { code: parseInt(req.params.code) } }).then(() => {
        return res.status(200).send({ message: `Se ha actualizado correctamente el empleado` })
    }).catch(error => {
        return res.status(500).send({ message: `Error al actualizar el empleado ${error}` })
    })
}

module.exports = {
    getAllEmployee, getEmployee,
    postEmployee,
    putEmployee
}


