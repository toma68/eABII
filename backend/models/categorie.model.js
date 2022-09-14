module.exports = (sequelize, Sequelize) => {
    const Categorie = sequelize.define("CATEGORIES", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        libelle: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })
    return Categorie;
};
