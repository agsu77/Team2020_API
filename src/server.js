const app = require("./app");
const {connect} = require('./config/connectionBD');

connect(process.env.DB_DEV);
app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando el ', process.env.PORT);
})