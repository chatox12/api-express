'use strict'

const express = require('express')/* exports express*/
const route = express.Router(); /* exports route express*/
const categoryCtrl = require('../../controllers/category') /* controllers exports */

route.get("/", categoryCtrl.getAllCategory) /* get all category  */
route.get("/:code", categoryCtrl.getCategory) /* get one category */
route.post("/", categoryCtrl.postCategory) /* create category */
route.patch('/:code', categoryCtrl.putCategory)/* update category */


module.exports = route; /* exports route from category */