/* Importing All Dependencies */
require('dotenv').config();
const TB = require('node-telegram-bot-api');
const fetch = require("cross-fetch");
/* Creating A Bot With Token */
const bot = new TB(process.env.TOKEN, { polling: true });
/* Message */
bot.on('message', async (message) => {
    if (!message.text) { return } else {
        if (message.text.startsWith("/start")) {
          bot.sendMessage(message.chat.id, `<b>List Of Commands</b>\n\n• /today : Gives Todays Mock Test Details\n• /links : Gives All Social Media Links`, {parse_mode : "HTML"})
        } else if (message.text.startsWith("/today")) {
          let response = await fetch("https://eklavya.deta.dev/today")
          let data = await response.json()
          if(data.key == "0"){
            bot.sendMessage(message.chat.id, `<b>No Mock Tests Today!!</b>`, {parse_mode : "HTML"})
          } else {
            bot.sendMessage(message.chat.id, `<b>Today's Mock Test Details</b>\n\n• Subject : ${data.subject}\n• Chapter : ${data.subject}`, {parse_mode : "HTML"})
          }
        } else if (message.text.startsWith("/links")) {
          let response = await fetch("https://eklavya.deta.dev/socials")
          let data = await response.json()
          bot.sendMessage(message.chat.id, `<b>All Links</b>\n\n• Instagram : ${data.instagram}\n• Telegram : ${data.telegram}\n• Website : ${data.website}\n`, {parse_mode : "HTML"})
        }
    };
});
