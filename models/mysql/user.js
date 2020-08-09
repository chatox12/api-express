'use strict'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        code: { field: 'usuar_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        user: { field: 'usuar_sUser', type: DataTypes.STRING(50), allowNull: true },
        password: { field: 'usuar_sPassword', type: 'TEXT', allowNull: true },
        state: { field: 'usuar_nEstado', type: DataTypes.INTEGER, allowNull: true },
        codeBranchOffice: { field: 'sucur_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        codeEmployee: { field: 'emple_cCodigo', type: DataTypes.INTEGER, allowNull: true },
        codeUserType: { field: 'tiuse_cCodigo', type: DataTypes.INTEGER, allowNull: true },
    }, {
        freezeTableName: true,
        tableName: 'tbl_usuario',
        timestamps: false,
        paranoid: false
    });

    return User
}