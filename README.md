# Team2020_API

## Modelo de datos
```
user: {
    _id,
    user,
    nombre,
    apellido,
    password,
}

requerimiento: {
    _id,
    nombre,
    isSSA,
    horas [
        idTarea,
        dia,
        descripcion,
        cantidadHoras,
        user
    ]
}
```
