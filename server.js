const chalk = require("chalk");
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

module.exports = sequelize;

const db = require("./backend/models");
db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.use(express.json());
app.listen(PORT, () => {
    console.log(chalk.green.bold(`Le serveur est lancé sur le port ${PORT}:`));
    console.log(chalk.blue(`\thttp://localhost:${PORT}`));
});

const clientsRouter = require("./backend/routes/clients.routes");
app.use("/clients/", clientsRouter);
app.use("/products/", productRouter);
app.use("/categories/", categorieRouter);

