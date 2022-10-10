const app = require("./app");
const {connect} = require('./config/connectionBD');

app.listen(3000, () => {
    console.log('Servidor escuchando el ', 3000);
})
connect(process.env.DB_DEV);