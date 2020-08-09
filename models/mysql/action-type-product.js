'use strict'

module.exports = (sequelize, DataTypes) => {
    const ActionTypeProduct = sequelize.define('ActionTypeProduct', {
        code: { field: 'ptiac_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        description: { field: 'ptiac_sDecripcion', type: 'TEXT', allowNull: true },
        codeUser: { field: 'usuar_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        codeProduct: { field: 'produ_cCodgio', type: DataTypes.INTEGER, allowNull: true, isEmail: true },
        codeActionProduct: { field: 'accpr_cCodigo', type: DataTypes.INTEGER, allowNull: true },

        createdAt: { field: 'ptiac_dFecha', type: DataTypes.DATE, allowNull: true },

    }, {
        freezeTableName: true,
        tableName: 'tbl_ProductoTipoAccion',
        timestamps: true,
        paranoid: false
    });

    return ActionTypeProduct
}