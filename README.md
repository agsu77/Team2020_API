# Team2020_API

## Modelo de datos
```
user: {
    _id,
    user,
    nombre,
    apellido,
    password,
    horas [
        idrequerimiento,
        idTarea,
        dia,
        desc,
        cantidadHoras
    ]
}

tarea: {
    _id,
    nombre,
}

requerimiento: {
    _id,
    nombre,
}
```
