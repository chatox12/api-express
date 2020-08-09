require('./mysql').sequelize.authenticate().then(() => {
    console.log("conexion exitosa")
}).catch(error => {
    console.log(error)
})