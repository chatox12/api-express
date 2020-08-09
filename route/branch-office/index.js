'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const branchOfficeCtrl = require('../../controllers/branch-office') /* controllers exports */

route.get("/", branchOfficeCtrl.getAllBranchOffice) /* get all brach office  */
route.get("/:code", branchOfficeCtrl.getBranchOffice) /* get one brach office */
route.post("/", branchOfficeCtrl.postBranchOffice) /* create brach office */
route.patch('/:code', branchOfficeCtrl.putBranchOffice)/* update brach office */


module.exports = route; /* exports route from branch office */