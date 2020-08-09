'use strict'

const models = require('../../models/mysql')

async function validateFromCreateProduct(product) {
    try {
        let branch = await models.BranchOffice.findAndCountAll({ where: { code: product.codeBranchOffice } });
        let category = await models.Category.findAndCountAll({ where: { code: product.codeCategory } });
        let existProduct = await models.Product.findAndCountAll({ where: { name: product.name } });

        return { branch: branch.count, category: category.count, product: existProduct.count }
    } catch (error) {
        return { status: 500, message: `Error en la busqueda de sucursal y de categoria: ${error}` }
    }
}


module.exports = { validateFromCreateProduct }