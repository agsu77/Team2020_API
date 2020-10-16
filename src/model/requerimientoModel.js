const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description Modelo para los Requerimientos
 * @author Pablo Rubianes
 */
let RequerimientoModel = new Schema({
    nombre: String,
});

module.exports = mongoose.model('Requerimiento', RequerimientoModel);