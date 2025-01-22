const {createPool} = require("mysql");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:3306/${process.env.DB_NAME}`);


console.log("database connected")
console.log("user",process.env.DB_USER)
console.log("password",process.env.DB_PASSWORD)
console.log("dbName",process.env.DB_NAME)

module.exports = {pool, sequelize};


