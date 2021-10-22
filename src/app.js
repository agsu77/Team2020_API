const express = require('express');
// Se importa todas las configuraciones desde .env
require('dotenv').config();

require('./config/connectionBD.js');

const app = express();

app.use(express.json());

//Routes
require("./routes/userRoutes")(app);

module.exports = app;