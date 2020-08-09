'use strict'

module.exports = (sequelize, DataTypes) => {
    const Supermarket = sequelize.define('Supermarket', {
        code: { field: 'super_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        name: { field: 'super_sNombre', type: DataTypes.STRING(100), allowNull: true },
        direction: { field: 'super_sDireccion', type: DataTypes.STRING(100), allowNull: true },
        phone: { field: 'super_sTelefono', type: DataTypes.STRING(8) },
        email: { field: 'super_sEmail', type: DataTypes.STRING(100), allowNull: true, validate: { isEmail: { msg: `You must enter a valid email` } } },
        state: { field: 'super_nEstado', type: DataTypes.INTEGER, allowNull: true, defaultValue: 1 },
        codeAdministrationUser: { field: 'usadm_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        createdAt: { field: 'super_dFechaCreacion', type: DataTypes.DATE, allowNull: false },
        updatedAt: { field: 'super_dFechaModificacion', type: DataTypes.DATE, allowNull: false },
    }, {
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt"] }
        },
        freezeTableName: true,
        tableName: 'tbl_supermercado',
        timestamps: true,
        paranoid: false
    });

    return Supermarket
}