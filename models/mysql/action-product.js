'use strict'

module.exports = (sequelize, DataTypes) => {
    const ActionProduct = sequelize.define('ActionProduct', {
        code: { field: 'accpr_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        description: { field: 'accpr_sDescripcion', type: DataTypes.STRING(100), allowNull: true },
        state: { field: 'accpr_nEstado', type: DataTypes.INTEGER, allowNull: true },
        createdAt: { field: 'accpr_dFechaCreacion', type: DataTypes.DATE, allowNull: true, isEmail: true },
        updatedAt: { field: 'accpr_dFechaModificacion', type: DataTypes.DATE, allowNull: true },

        createdAt: { field: 'ptiac_dFecha', type: DataTypes.DATE, allowNull: true },

    }, {
        freezeTableName: true,
        tableName: 'tbl_accionProducto',
        timestamps: true,
        paranoid: false
    });

    return ActionProduct
}