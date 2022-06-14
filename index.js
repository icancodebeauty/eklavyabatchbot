const bot = require("./modules/bot")
bot.launch()
// Commands
bot.command("start", require("./commands/start"))
bot.command("today", require("./commands/today"))
bot.command("links", require("./commands/links"))
bot.command("mocktest", require("./commands/mocktest"))
// Callback Query
bot.on("callback_query", require("./callback/index"))
// New Member Joins
bot.on("new_chat_members", require("./modules/delete"))
