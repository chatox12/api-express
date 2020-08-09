'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const orderCtrl = require('../../controllers/order') /* controllers exports */

route.get("/", orderCtrl.getAllOrder) /* get all order  */
route.get("/:code", orderCtrl.getOrder) /* get one order */
route.post("/", orderCtrl.postOrder) /* create order */
route.patch('/:code', orderCtrl.putOrder)/* update order */


module.exports = route; /* exports route from order */