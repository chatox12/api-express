'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config')

function createToken(user, typeUser) {

    if (typeUser === 1) {

        const payload = {
            sub: user[0].code,
            user: user[0].user,
            typeUser: typeUser,
            iat: moment().unix(),
            exp: moment().add(5, 'days').unix()
        }

        return jwt.encode(payload, config.jwt.key)
    }

    if (typeUser === 2) {
        const payload = {
            sub: user[0].code,
            user: user[0].user,
            typeUser: typeUser,
            iat: moment().unix(),
            exp: moment().add(5, 'days').unix()
        }

        return jwt.encode(payload, config.jwt.key)
    }
}

function decodeToken(token) {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.jwt.key)
            if (payload.exp <= moment().unix()) {
                reject({
                    status: 404,
                    message: 'El token ha expirado'
                })
            }
            resolve({ sub: payload.sub, user: payload.user, typeUser: payload.typeUser })
        } catch{
            reject({
                status: 500,
                message: 'Invalid token'
            })
        }
    })

}

module.exports = {
    createToken, decodeToken
}