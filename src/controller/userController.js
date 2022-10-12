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
        if (data.length) {
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
    let userName = req.params.user;
    let condition = { user: new RegExp(userName, 'i') };

    User.findOneAndUpdate(condition, req.body).then(data => {
        if (!data) {
            res.status(404).send({
                message: "No se puedo actualizar usuario " + userName + ". Comprobar nombre de usuario"
            });
        } else {
            res.send({ message: "Usuario actualizado correctamente." })
        };
    }).catch(err => {
        res.status(500).send({
            message: "Error al actualizar usuario " + userName
        });
    });
};

exports.delete = (req, res) => {
    let userName = req.params.user;
    let condition = { user: new RegExp(userName, 'i') };

    User.findOneAndRemove(condition).then(data => {
        if (!data) {
            res.status(404).send({
                message: "No se puedo borrar usuario " + userName + ". Comprobar nombre de usuario"
            });
        } else {
            res.send({ message: "Usuario borrado correctamente." })
        };
    }).catch(err => {
        res.status(500).send({
            message: "Error al borrar usuario " + userName
        });
    });
};