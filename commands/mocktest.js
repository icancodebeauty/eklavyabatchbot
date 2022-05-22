const keyboard = require("../keyboards/mainkeyboard")
// Exporting Start Command
module.exports = (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  ctx.telegram.sendMessage(process.env.MYID, `[${ctx.message.from.first_name || "Unknown"}](tg://user?id=5278367192) Has Used /mocktest Command`, {parse_mode: "MARKDOWN"});
  ctx.reply(`<b>Select A Subject For Mock Test :</b>`, keyboard);
}
