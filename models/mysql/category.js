'use strict'

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        code: { field: 'categ_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        description: { field: 'categ_sDescripcion', type: DataTypes.STRING(100), allowNull: true },
        state: { field: 'categ_nEstado', type: DataTypes.INTEGER, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_categoria',
        timestamps: false,
        paranoid: false
    });

    return Category
}