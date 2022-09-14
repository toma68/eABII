module.exports = (sequelize, Sequelize) => {
    const Admin = sequelize.define("ADMINS", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Client,
                key: id
            }
        }
    });
    return Admin;
};