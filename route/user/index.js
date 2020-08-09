'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const userCtrl = require('../../controllers/user') /* controllers exports */

route.get("/", userCtrl.getAllUser) /* get all User  */
route.get("/:code", userCtrl.getUser) /* get one User */
route.post("/", userCtrl.postUser) /* create User */
route.patch('/:code', userCtrl.putUser)/* update User */


module.exports = route; /* exports route from User */