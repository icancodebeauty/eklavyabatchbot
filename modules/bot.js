// Importing Dependencies
require('dotenv').config();
const { Telegraf } = require('telegraf');
// Exporting A Bot With Token
module.exports = new Telegraf(process.env.TOKEN);
