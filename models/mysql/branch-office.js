'use strict'

module.exports = (sequelize, DataTypes) => {
    const BranchOffice = sequelize.define('BranchOffice', {
        code: { field: 'sucur_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        name: { field: 'sucu_sNombre', type: DataTypes.STRING(100), allowNull: true },
        direction: { field: 'sucur_sDireccion', type: DataTypes.STRING(100), allowNull: true },
        phone: { field: 'sucur_sTelefono', type: DataTypes.STRING(8), allowNull: true },
        state: { field: 'sucur_nEstado', type: DataTypes.INTEGER, allowNull: true },
        codeSupermarket: { field: 'super_cCodigo', type: DataTypes.INTEGER, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_sucursal',
        timestamps: false,
        paranoid: false
    });

    return BranchOffice
}