'use strict'

module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('Transfer', {
        code: { field: 'trasla_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        codigoSucursalOrigen: { field: 'trasla_sSucursalOrigen', type: DataTypes.INTEGER, allowNull: true },
        codigoSucursaDestino: { field: 'trasla_sSucursalDestino', type: DataTypes.INTEGER, allowNull: true },
        cantidad: { field: 'trasla_nCantidad', type: DataTypes.INTEGER, allowNull: true },
        fecha: { field: 'trasla_dFecha', type: DataTypes.DATE, allowNull: true, defaultValue: Date.now() },
        codigoProductoOrigen: { field: 'produ_cCodigoOrigen', type: DataTypes.INTEGER, allowNull: true },
        codigoProductoDestino: { field: 'produ_cCodigoDestino', type: DataTypes.INTEGER, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_traslado',
        timestamps: false,
        paranoid: false
    });

    return Transfer
}