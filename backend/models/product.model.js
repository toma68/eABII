module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("PRODUCTS", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        img_path: {
            type: Sequelize.STRING,
            allowNull: true
        },
        categorie_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Product;
};