'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const employeeCtrl = require('../../controllers/employee') /* controllers exports */

route.get("/", employeeCtrl.getAllEmployee) /* get all employee */
route.get("/:code", employeeCtrl.getEmployee) /* get one employee */
route.post("/", employeeCtrl.postEmployee) /* create new empoyee */
route.patch('/:code', employeeCtrl.putEmployee)/* update employee */

module.exports = route; /* exports route from administrator user */