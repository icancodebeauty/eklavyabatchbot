const keyboard = require("../keyboards/mainkeyboard")
// Exporting Start Command
module.exports = (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  ctx.reply(`<b>Select A Subject!</b>`, keyboard);
}
