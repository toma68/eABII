const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.admins = require("../models/admin.model")(sequelize, Sequelize);
db.clients = require("../models/client.model")(sequelize, Sequelize);
db.produits = require("../models/product.model")(sequelize, Sequelize);
db.categories = require("../models/categorie.model")(sequelize, Sequelize);

module.exports = db;