const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * @description Modelo para las tareas
 * @author Pablo Rubianes
 */
let TareaModel = new Schema({
    nombre: String,
});

module.exports = mongoose.model('Tarea', TareaModel);