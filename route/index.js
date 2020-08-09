'use strict'

const express = require('express')
const api = express()

const administratorUser = require('./administrator-user') /* import administrator user  route*/
const alert = require('./alert') /* import administrator user  route*/
const branchOffice = require('./branch-office') /* import administrator user  route*/
const category = require('./category') /* import administrator user  route*/
const employee = require('./employee') /* import employee routes */
const order = require('./order') /* import administrator user  route*/
const product = require('./product') /* import administrator user  route*/
const provider = require('./provider') /* import administrator user  route*/
const supermarket = require('./supermarket') /* import administrator user  route*/
const typeUser = require('./type-user') /* import administrator user  route*/
const user = require('./user')
const transfer = require('./transfer')
const login = require('./login')
const auth = require('../middlewares/auth')


api.use('/administrator-user', auth.isAuth, administratorUser) /* using administrator user route */
api.use('/alert', auth.isAuth, alert) /* using administrator user route */
api.use('/branch-office', auth.isAuth, branchOffice) /* using branc office  route */
api.use('/category', auth.isAuth, category) /* using category route */
api.use('/employee', auth.isAuth, employee) /* using employee route */
api.use('/order', auth.isAuth, order) /* using order route */
api.use('/product', auth.isAuth, product) /* using product route */
api.use('/provider', auth.isAuth, provider) /* using provider route */
api.use('/supermarket', auth.isAuth, supermarket) /* using supermarket route */
api.use('/type-user', auth.isAuth, typeUser) /* using type user route */
api.use('/user', auth.isAuth, user) /* using user route */
api.use('/transfer', auth.isAuth, transfer)
api.use('/auth', login)

module.exports = api