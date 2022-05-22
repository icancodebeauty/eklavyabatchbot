const bot = require("./modules/bot")
bot.launch()
// Commands
bot.command("start", require("./commands/start"))
bot.command("today", require("./commands/today"))
bot.command("links", require("./commands/links"))
