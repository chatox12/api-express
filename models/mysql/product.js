'use strict'

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        code: { field: 'produ_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        name: { field: 'produ_sNombre', type: DataTypes.STRING(100), allowNull: true },
        description: { field: 'produ_sDescripcion', type: DataTypes.STRING(200), allowNull: true },
        stock: { field: 'produ_nStock', type: DataTypes.INTEGER, allowNull: true },
        minumunStock: { field: 'produ_nStockMinimo', type: DataTypes.INTEGER, allowNull: true },
        price: { field: 'produ_nPrecio', type: DataTypes.FLOAT, allowNull: true },
        state: { field: 'produ_nEstado', type: DataTypes.INTEGER, allowNull: true },
        codeBranchOffice: { field: 'sucur_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        codeCategory: { field: 'categ_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        createdAt: { field: 'produ_dFechaCreacion', type: DataTypes.DATE, allowNull: true },
        updatedAt: { field: 'produ_dFechaModificacion', type: DataTypes.DATE, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_producto',
        timestamps: true,
        paranoid: false
    });

    return Product
}