'use strict'

module.exports = (sequelize, DataTypes) => {
    const Provider = sequelize.define('Provider', {
        code: { field: 'prove_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        name: { field: 'prove_sNombre', type: DataTypes.STRING(100), allowNull: true },
        direction: { field: 'prove_sDireccion', type: DataTypes.STRING(100), allowNull: true },
        phone: { field: 'prove_sTelefono', type: DataTypes.STRING(8), allowNull: true },
        email: { field: 'prove_sEmail', type: DataTypes.STRING(100), allowNull: true, validate: { isEmail: { msg: `You must enter a valid email` } } },
        representativeName: { field: 'prove_sNombreRepresentante', type: DataTypes.STRING(200), allowNull: true },
        representativePhone: { field: 'prove_sTelefonoRepresentante', type: DataTypes.STRING(8), allowNull: true },
        representativeEmail: { field: 'prove_sEmailRepresentante', type: DataTypes.STRING(100), allowNull: true, validate: { isEmail: { msg: `You must enter a valid email` } } },
        state: { field: 'prove_nEstado', type: DataTypes.INTEGER, allowNull: true },

    }, {
        freezeTableName: true,
        tableName: 'tbl_proveedor',
        timestamps: false,
        paranoid: false
    });

    return Provider
}