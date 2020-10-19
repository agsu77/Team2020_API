const User = require('../model/userModel');


exports.create = (req, res) => {
    /**
     * Validaciones
     */
    if(!req.body.nombre || !req.body.apellido || !req.body.user || !req.body.password ){
        return res.status(400).send({
            message: 'Los campos no pueden ser vacios',
        })
    }

    /**
     * Creo el usuario
     */
    const user = new User({
        userName: req.body.user,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        password: req.body.password,
    })

    /**
     * Salvo el usuario
     */
    user.save().then((data) => {
        res.send(data);
    }).catch((err) =>{
        res.status(500).send({
            message: err.message || 'Ocurrio un error creando el usuario.',
        });
    });
}

/**
 * Obtengo datos de usuario
 * @param user
 */
exports.find = (req, res) => {
    const userName = req.query.user;
    var condition = userName ? { userName: { $regex: new RegExp(userName), $options: "i" } } : {};

    User.find(condition).then((data) => {
        if (!data)
          res.status(404).send({ message: "No se encontro usuario " + userName });
        else res.send(data);
      })
      .catch((err) => {
        res.status(500).send({ 
            message: err.message || "Ocurrio un error intentando devolver el usuario = " + userName });
      });
}

/**
 * Actualiza un usuario
 * @param id
 */
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Los campos no pueden ser vacios!"
        });
      }    
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
      if (!data) {
        res.status(404).send({
          message: "No se puedo actualizar usuario " + userName + ". Comprobar nombre de usuario" });
      } else res.send({ message: "Usuario actualizado correctamente." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar usuario " + userName 
      });
    });

};

exports.findByUsername = (req, res) => {
    User.find({user: req.params.user}).then((user) => {
        if(!user){
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