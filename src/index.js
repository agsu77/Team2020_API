const express = require('express');

require('./config/config.js');
require('./config/connectionBD.js');

const app = express();

app.use(express.json());

//Routes
require("./routes/userRoutes")(app);

app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando el ', process.env.PORT);
})
