/* Importing All Dependencies */
const { Telegraf } = require('telegraf');
const fetch = require("cross-fetch");
require('dotenv').config();
/* Creating A Bot With Token */
const bot = new Telegraf(process.env.TOKEN);
/* Starting Bot */
bot.launch()
/* /start Commands */
bot.start((ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing")
  ctx.reply(`<b>List Of Commands</b>
• /today - Gives Todays Mock Test Details
• /links - Gives All Social Media Links`,
  {parse_mode : "HTML"})
})
/* /today Command */
bot.command("today", async (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing")
  let response = await fetch("https://eklavya.deta.dev/today")
  let data = await response.json()
  if(data.key == "0"){
    ctx.reply(`<b>No Mock Tests Today!!</b>`, {parse_mode : "HTML"})
  } else {
    ctx.reply(`<b>Today's Mock Test Details</b>
• Subject : ${data.subject}
• Chapter : ${data.chapter}`,
    {parse_mode : "HTML"})
  }
})
/* /links Command */
bot.command("links", async (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing")
  let response = await fetch("https://eklavya.deta.dev/socials")
  let data = await response.json()
  ctx.reply(`<b>All Links</b>
• Instagram : ${data.instagram}
• Telegram : ${data.telegram}
• Website : ${data.website}`,
  {parse_mode : "HTML", disable_web_page_preview : true})
})
