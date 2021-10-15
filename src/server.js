const app = require("./app");

app.listen(process.env.PORT, () => {
    console.log('Servidor escuchando el ', process.env.PORT);
})