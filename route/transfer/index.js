'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const transferCtrl = require('../../controllers/transfer') /* controllers exports */

route.post("/", transferCtrl.postTransfer) /* create transfer */


module.exports = route; /* exports route from trasfer */