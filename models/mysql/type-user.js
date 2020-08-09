'use strict'

module.exports = (sequelize, DataTypes) => {
    const TypeUser = sequelize.define('TypeUser', {
        code: { field: 'tiuse_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        description: { field: 'tiuse_nDescripcion', type: DataTypes.STRING(70), allowNull: true },
        state: { field: 'tiuse_nEstado', type: DataTypes.INTEGER, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_TipoUsuario',
        timestamps: false,
        paranoid: false
    });

    return TypeUser
}