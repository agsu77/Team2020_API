const express = require('express');
const bodyParser = require('body-parser');

require('./config/config.js');
require('./config/connectionBD.js');

const app = express();

app.use(bodyParser.json());

//Routes
require("./routes/userRoutes")(app);

app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando el ', process.env.PORT);
})
