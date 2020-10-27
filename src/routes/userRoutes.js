module.exports = app => {
    const user = require("../controller/userController.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo usuario
    router.post("/", user.create);

    // Obtener usuario
    router.get("/", user.find);

    // Actualizar usuario
    router.put("/:id", user.update);

    app.use('/api/user', router);

};