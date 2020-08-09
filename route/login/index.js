'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const userCtrl = require('../../controllers/user') /* controllers exports */

route.post("/", userCtrl.singIn) /* create User */

module.exports = route; /* exports route from User */