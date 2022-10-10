const Requerimiento = require('../model/requerimientoModel');
const { returnError } = require('../util/manageErrors')
const { validationResult } = require('express-validator');

/**
 * Crea requerimientos
 * @param req 
 * @param res 
 */
exports.create = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const requerimiento = new Requerimiento({
        nombre: req.body.nombre,
        idSSA: req.body.idSSA,
    })

    requerimiento.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send(returnError(err.message || 'Ocurrio un error creando el requerimiento.', 'CreateRequerimiento'));
    })
}

/**
 * Obtengo datos de requerimiento
 * @param req 
 * @param res 
 */
exports.find = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.idSSA);
    let condition = {idSSA: req.body.idSSA};

    Requerimiento.find(condition, '-__v').then((data) => {
        if (!data) {
            res.status(404).send({ message: "No se encontro requerimiento: " + userName });
        } else {
            res.send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Ocurrio un error intentando devolver el requerimiento: " + userName,
        });
    });
}

/**
 * Obtener todos los SSAs con ID e idSSA
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
exports.findAll = (req, res) => {
    Requerimiento.find({}, '-horas -__v').then((data) => {
        if(!data){
            res.status(204).send({ message: "No se encontraron requerimeintos" });
        } else {
            res.send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Ocurrio un error intentando devolver los requerimientos: " + userName,
        });
    });
}

/**
 * Borra el SSA a partir de su id
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = (req, res) => {
    let idSSA = req.params.idSSA;
    let condition = {idSSA: idSSA};

    Requerimiento.findOneAndDelete(condition).then(data => {
        if (!data) {
            res.status(404).send({
                message: "No se puedo borrar requerimiento " + idSSA + ". Comprobar el ID de SSA"
            });
        } else res.send({ message: "Requerimiento " + idSSA + " borrado correctamente." });
    }).catch(err => {
        res.status(500).send({
            message: "Error al borrar Requerimiento " + idSSA
        });
    })
}

exports.addHoras = (req, res) => {
    //TODO: Terminar esto
    if (!req.body) {
        return res.status(400).send({
            message: "Los campos no pueden ser vacios!"
        });
    }
}