'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const productCtrl = require('../../controllers/product') /* controllers exports */

route.get("/", productCtrl.getAlertProduct) /* get one Product */


module.exports = route; /* exports route from Product */