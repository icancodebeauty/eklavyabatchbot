require("dotenv").config()
const { Client } = require("pg");
const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  database: process.env.DATABASE
})
client.connect();
module.exports = client;
