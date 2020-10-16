const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description Modelo para el Usuario
 * @author Pablo Rubianes
 */
let UserModel = new Schema({
    user: String,
    nombre: String,
    apellido: String,
    password: String,
    horas: [{
        idRequerimiento: String,
        idTarea: String,
        dia: Date,
        descripcion: String,
        cantidadHoras: Number,
    }]
});

module.exports = mongoose.model('User', UserModel);