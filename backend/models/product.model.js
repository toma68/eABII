module.exports = (sequelize, Sequilize) => {
    const Product = sequelize.define("PRODUCTS", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        img_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        categorie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Client,
                key: id
            }
        }
    });
    return Product;
};