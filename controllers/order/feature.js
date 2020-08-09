'use strict'
const models = require('../../models/mysql')

async function validateDataOrder(codeProduct, codeProvider) {
    try {
        let producto = await models.Product.findAndCountAll({ where: { code: codeProduct } });
        let provider = await models.Provider.findAndCountAll({ where: { code: codeProvider } })
        return { producto: producto.count, provider: provider.count }
    } catch (error) {
        console.log(error)
        return { status: 500, message: `Error al buscar el producto y proveedor para almacenar el pedido: ${error}` }
    }
}

module.exports = {
    validateDataOrder
}