const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description Modelo para los Requerimientos
 * @author Pablo Rubianes
 */
let RequerimientoModel = new Schema({
    nombre: String,
    idSSA: Number,
    horas: [{
        idTarea: String,
        dia: Date,
        descripcion: String,
        cantidadHoras: Number,
        user: String,
    }]
});

module.exports = mongoose.model('Requerimiento', RequerimientoModel);