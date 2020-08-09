'use strict'

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        code: { field: 'pedid_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        codeUser: { field: 'usuar_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        stock: { field: 'pedid_nStock', type: DataTypes.INTEGER, allowNull: true },
        price: { field: 'pedid_nPrecio', type: DataTypes.FLOAT, allowNull: true },
        factura: { field: 'pedid_sFactura', type: 'TEXT', allowNull: true },
        codeProduct: { field: 'produ_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        codeProvider: { field: 'prove_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        fecha: { field: 'pedid_dFechaCreacion', type: DataTypes.DATE, allowNull: true, defaultValue: Date.now() },
    }, {
        freezeTableName: true,
        tableName: 'tbl_pedido',
        timestamps: false,
        paranoid: false
    });

    return Order
}