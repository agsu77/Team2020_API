const mongoose = require('mongoose');

mongoose.connection.on('connected', () =>{
    console.log('Conexion con base de datos exitosa');
});

mongoose.connection.on('disconnected', () => {
    console.warn('Desconectado de la Base de datos');
})

mongoose.connection.on('reconnectd', () => {
    console.warn('Reconecado a la Base de datos');
})

mongoose.connection.on('close', () => {
    console.warn('Conexion con la base de datos cerrada');
})

mongoose.connection.on('errror', (error) => {
    logger.error('Error en la conexion a la Base de Datos: ', error)
})

const connect = async () => {
    console.debug('Estableciendo conexion con la base');
    await mongoose.connect('mongodb+srv://userTeam2k:userTeam2k@cluster0.hzije.mongodb.net/team2k', {
        useNewUrlParser : true,
        useUnifiedTopology : true
    });
}

connect().catch(error => (console.log('Error de conexion :', error)) );