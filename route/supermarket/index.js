'use-strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const supermarketCtrl = require('../../controllers/supermarket') /* controllers exports */

route.get("/", supermarketCtrl.getAllSupermarket) /* get all supermarket  */
route.get("/:code", supermarketCtrl.getSupermarkets) /* get one supermarket */
route.post("/", supermarketCtrl.postSupermarket) /* create supermarket */
route.patch('/:code', supermarketCtrl.puSupermarket)/* update supermarket */
module.exports = route; /* exports route from supermarket */