const User = require('../model/userModel');
const { returnError } = require('../util/manageErrors')
const { validationResult } = require('express-validator');


exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    /**
    * Creo el usuario
    */
    const user = new User({
        user: req.body.user,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        password: req.body.password,
    })

    /**
    * Salvo el usuario
    */
    user.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(returnError(err.message || 'Ocurrio un error creando el usuario.', 'CreateUser'));
    });
}

/**
* Obtengo datos de usuario
* @param user
*/
exports.find = (req, res) => {
    /**
    * Validaciones
    */
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
     }
    let userName = req.body.user;
    let condition = { user: new RegExp(userName, 'i') };

    User.find(condition).then((data) => {
        if (data.length){
            res.send(data);
        } else {
            res.status(404).send(returnError("No se encontro el user: " + userName, 'FindUser'));
        }
    }).catch((err) => {
        res.status(500).send(returnError(err.message || "Ocurrio un error intentando devolver el user: " + userName, 'FindUser'));
    });
}

/**
* Actualiza un usuario
* @param id
*/
exports.update = (req, res) => {
    //TODO: Revisar esto
    if (!req.body) {
        return res.status(400).send({
            message: "Los campos no pueden ser vacios!"
        });
    }
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: "No se puedo actualizar usuario " + userName + ". Comprobar nombre de usuario"
            });
        } else res.send({ message: "Usuario actualizado correctamente." });
    }).catch(err => {
        res.status(500).send({
            message: "Error al actualizar usuario " + userName
        });
    });
};

exports.findByUsername = (req, res) => {
    User.find({ user: req.params.user }).then((user) => {
        if (!user) {
            return res.status(400).send({
                message: 'Usuario "' + req.params.user + 'no encontrado',
            })
        }
        res.status(200).send(user);
        console.log('Usario ' + user.user + ' encontrado, aca si logueamos');
    }).catch((err) => {
        return res.status(500).send({
            message: "Error al buscar el usuario: " + req.params.user,
        });
    })
};