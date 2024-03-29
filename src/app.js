const express = require('express');
// Se importa todas las configuraciones desde .env
require('dotenv').config();

const app = express();

app.use(express.json());

//Routes
require("./routes/userRoutes")(app);
require("./routes/requerimientoRoutes")(app);

module.exports = app;