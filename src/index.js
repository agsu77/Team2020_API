const express = require('express');

require('./config/config.js');

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando el ', process.env.PORT);
})