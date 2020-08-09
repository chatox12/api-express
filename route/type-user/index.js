'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const typeUserCtrl = require('../../controllers/type-user') /* controllers exports */

route.get("/", typeUserCtrl.getAllTypeUser) /* get all Provider  */
route.get("/:code", typeUserCtrl.getTypeUser) /* get one Provider */
route.post("/", typeUserCtrl.postTypeUser) /* create Provider */
route.patch('/:code', typeUserCtrl.putTypeUser)/* update Provider */


module.exports = route; /* exports route from Provider */