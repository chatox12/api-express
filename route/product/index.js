'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const productCtrl = require('../../controllers/product') /* controllers exports */

route.get("/", productCtrl.getAllProduct) /* get all Product  */
route.get("/:code", productCtrl.getProduct) /* get one Product */
route.post("/", productCtrl.postProduct) /* create Product */
route.patch('/:code', productCtrl.putProduct)/* update Product */


module.exports = route; /* exports route from Product */