'use strict'

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        code: { field: 'emple_cCodigo', type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        firstName: { field: 'emple_sPrimerNombre', type: DataTypes.STRING(50), allowNull: true },
        secondName: { field: 'emple_sSegundoNombre', type: DataTypes.STRING(50), allowNull: true },
        otherName: { field: 'emple_sOtroNombre', type: DataTypes.STRING(100), allowNull: true, defaultValue: '' },
        firstLastName: { field: 'emple_sPrimerApellido', type: DataTypes.STRING(50), allowNull: true },
        secondLastName: { field: 'emple_sSegundoApellido', type: DataTypes.STRING(50), allowNull: true },
        marriedName: { field: 'emple_sCasadaApellido', type: DataTypes.STRING(100), allowNull: true, defaultValue: '' },
        phone: { field: 'emple_sTelefono', type: DataTypes.STRING(8) },
        email: { field: 'emple_sEmail', type: DataTypes.STRING(100), allowNull: true, validate: { isEmail: { msg: `You must enter a valid email` } } },
        state: { field: 'emple_nEstado', type: DataTypes.INTEGER, allowNull: true, defaultValue: 1 },
        codeSupermarket: { field: 'super_cCodigo', type: DataTypes.INTEGER, allowNull: true }
    }, {
        freezeTableName: true,
        tableName: 'tbl_Empleado',
        timestamps: false,
        paranoid: false
    });

    return Employee
}