'use strict'

/* controller for managing transfer */
const models = require('../../models/mysql')
/* function post, create one  Transfer  */
async function postTransfer(req, res) {
    try {
        var transaction = await models.sequelize.transaction()
        let originBrach = await models.BranchOffice.findOne({ attributes: ["codeSupermarket"], where: { code: req.body.codigoSucursalOrigen } });
        let destinationBrach = await models.BranchOffice.findOne({ attributes: ["codeSupermarket"], where: { code: req.body.codigoSucursalDestino } });
        if (originBrach.codeSupermarket === destinationBrach.codeSupermarket) {
            let stockOriginProduct = await models.Product.findOne({ attributes: ["stock"], where: { code: req.body.codigoProductoOrigen, codeBranchOffice: req.body.codigoSucursalOrigen } })
            let stockDestinationProduct = await models.Product.findOne({ attributes: ["stock"], where: { code: req.body.codigoProductoDestino, codeBranchOffice: req.body.codigoSucursalDestino } })
            if (stockOriginProduct.stock >= req.body.cantidad) {
                let updateOriginProduct = await models.Product.update({ stock: (stockOriginProduct.stock - req.body.cantidad) }, { where: { code: req.body.codigoProductoOrigen, codeBranchOffice: req.body.codigoSucursalOrigen }, transaction })
                let updateDestinationProduct = await models.Product.update({ stock: (stockDestinationProduct.stock + req.body.cantidad) }, { where: { code: req.body.codigoProductoDestino, codeBranchOffice: req.body.codigoSucursalDestino }, transaction })
                let createTrasfer = await models.Transfer.create(req.body, { transaction })
                transaction.commit();
                return res.status(200).send({ message: `Se ha realizado correctamente la transferencia...` })
            } else {
                return res.status(404).send({ message: `No cuenta con la cantidad necesaria para realizar la transferencia de producto` })
            }
        } else {
            return res.status(404).send({ message: `La sucursales no pertenecen al mismo supermerado` })
        }
    } catch (error) {
        console.log(error)
        transaction.rollback()
        return res.status(500).send({ message: `Error al transferir producto: ${error}` })
    }
}

module.exports = {
    postTransfer
}


