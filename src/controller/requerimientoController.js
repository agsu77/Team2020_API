const Requerimiento = require('../model/requerimientoModel');

/**
 * Crea requerimientos
 * @param req 
 * @param res 
 */
exports.create = (req, res) => {
    if (!req.body.nombre) {
        return res.status(400).send({
            message: 'El nombre no puede ser nulo',
        })
    }

    const Requerimiento = new Requerimiento({
        nombre: req.body.nombre,
        idSSA: req.body.idSSA,
    })

    Requerimiento.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'Ocurrio un error creando el requerimiento.',
        });
    })
}

/**
 * Obtengo datos de requerimiento
 * @param req 
 * @param res 
 */
exports.find = (req, res) => {
    const requerimiento = req.query.requerimiento;
    var condition = requerimiento ? { requerimiento: { $regex: new RegExp(requerimiento), $options: "i" } } : {};

    User.find(condition).then((data) => {
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

exports.addHoras = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Los campos no pueden ser vacios!"
        });
    }
}