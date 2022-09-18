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

db.produits.belongsTo(db.categories, {
    foreignKey: "categorie_id"
});


db.categories.hasMany(db.produits, {
    foreignKey: "categorie_id"
});

module.exports = db;