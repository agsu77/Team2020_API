module.exports = app => {
    const user = require("../controller/userController.js");
    const { check } = require('express-validator');
  
    var router = require("express").Router();
  
    // Crear un nuevo usuario
    router.post("/",[
        check('user').notEmpty().withMessage('El User es requerido'),
        check('nombre').notEmpty().withMessage('El Nombre es requerido'),
        check('apellido').notEmpty().withMessage('El Apellido es requerido'),
        check('password').notEmpty().withMessage('El Password es requerido'),
    ], user.create);

    // Obtener usuario
    router.get("/", [
        check('user').notEmpty().withMessage('El User es requerido')
    ],user.find);

    // Actualizar usuario
    router.put("/:user", user.update);

    router.delete("/:user", user.delete);

    app.use('/api/user', router);

};