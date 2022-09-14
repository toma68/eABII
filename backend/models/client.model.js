module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("CLIENTS", {
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
        balance: {
            type: Sequelize.DECIMAL,
            allowNull: false
        }
    });
    return Client;
};