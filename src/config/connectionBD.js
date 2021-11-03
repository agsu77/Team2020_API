const mongoose = require('mongoose');

mongoose.connection.on('connected', () =>{
    console.debug('Conexion con base de datos exitosa');
});

mongoose.connection.on('disconnected', () => {
    console.debug('Desconectado de la Base de datos');
})

mongoose.connection.on('reconnectd', () => {
    console.debug('Reconecado a la Base de datos');
})

mongoose.connection.on('close', () => {
    console.debug('Conexion con la base de datos cerrada');
})

mongoose.connection.on('errror', (error) => {
    logger.error('Error en la conexion a la Base de Datos: ', error)
})

const connect = async (db) => {
    console.debug('Estableciendo conexion con la base');
    await mongoose.connect(db, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
}

const disconect = async () => {
    console.debug('Desconectando la conexion con la base');
    await mongoose.connection.close();
}

module.exports = {disconect, connect};