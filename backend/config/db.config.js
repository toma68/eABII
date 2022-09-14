require("dotenv").config();

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWRD = process.env.PASSWRD;
const DATABASE = process.env.DB;

module.exports = {
    database: DATABASE,
    username: USER,
    password: PASSWRD,
    host: HOST,
    dialect: "mariadb"
};