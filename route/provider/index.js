'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const providerCtrl = require('../../controllers/provider') /* controllers exports */

route.get("/", providerCtrl.getAllProvider) /* get all Provider  */
route.get("/:code", providerCtrl.getProvider) /* get one Provider */
route.post("/", providerCtrl.postProvider) /* create Provider */
route.patch('/:code', providerCtrl.putProvider)/* update Provider */


module.exports = route; /* exports route from Provider */