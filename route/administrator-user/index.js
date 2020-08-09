'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const adminitratorUserCtrl = require('../../controllers/administrator') /* controllers exports */

route.get("/", adminitratorUserCtrl.getAllUsers) /* get all users  */
route.get("/:code", adminitratorUserCtrl.getUser) /* get one users */
route.post("/", adminitratorUserCtrl.postUser) /* create users */
route.patch('/:code', adminitratorUserCtrl.putUser)/* update users */
module.exports = route; /* exports route from administrator user */