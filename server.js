const chalk = require("chalk");
const express = require("express");
const app = express();

require("dotenv").config();

const db = require("./backend/models");

db.sequelize.sync({ force: true })
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });


app.use(express.json());

require("./backend/routes/clients.routes")(app);
require("./backend/routes/categories.routes")(app);
require("./backend/routes/products.routes")(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(chalk.green.bold(`Le serveur est lancé sur le port ${PORT}:`));
    console.log(chalk.blue(`\thttp://localhost:${PORT}`));
});
