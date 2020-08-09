'use strict'

module.exports = (sequelize, DataTypes) => {
    const AdministratorUser = sequelize.define('AdministratorUser', {
        code: { field: 'usadm_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        firstName: { field: 'usadm_sPrimerNombre', type: DataTypes.INTEGER, allowNull: true },
        secondName: { field: 'usadm_sSegundoNombre', type: DataTypes.INTEGER, allowNull: true },
        othersName: { field: 'usadm_sOtroNombre', type: DataTypes.INTEGER, defaultValue: "" },
        firstLastName: { field: 'usadm_sPrimerApellido', type: DataTypes.INTEGER, allowNull: true },
        secondLastName: { field: 'usadm_sSegundoApellido', type: DataTypes.INTEGER, allowNull: true },
        marriedLastName: { field: 'usadm_sCasadaApellido', type: DataTypes.INTEGER, allowNull: true, defaultValue: '' },
        user: { field: 'usadm_sUser', type: DataTypes.INTEGER, allowNull: true },
        password: { field: 'usadm_sPassword', type: DataTypes.INTEGER, allowNull: true },
        state: { field: 'usadm_nEstado', type: DataTypes.INTEGER, allowNull: true, defaultValue: 1 },
        createdAt: { field: 'usadm_dFechaCreacion', type: DataTypes.DATE, allowNull: true },
        updatedAt: { field: 'usadm_dFechaModificacion', type: DataTypes.DATE, allowNull: true },
    }, {
        defaultScope: {
            attributes: {exclude: ["createdAt", "updatedAt"]}
        },
        freezeTableName: true,
        tableName: 'tbl_usuarioAdministrador',
        timestamps: true,
        paranoid: false
    });

    return AdministratorUser
}