module.exports = app => {
    const requerimiento = require("../controller/requerimientoController.js");
    const { check } = require('express-validator');
  
    var router = require("express").Router();
  
    // Crear un nuevo requerimiento
    router.post("/",[
        check('nombre').notEmpty().withMessage('El Nombre es requerido'),
        check('idSSA').notEmpty().withMessage('El idSSA es requerido'),
    ], requerimiento.create);

    // Obtener Requerimiento
    router.get("/", [
        check('idSSA').notEmpty().withMessage('El idSSA es requerido')
    ],requerimiento.find);

    //Borro Requerimiento
    router.delete("/:idSSA", requerimiento.delete);

    router.get("/all", requerimiento.findAll);

    app.use('/api/requerimiento', router);
};