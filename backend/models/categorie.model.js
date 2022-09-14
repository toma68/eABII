module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("CATEGORIES", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        libelle: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Categorie;
};
