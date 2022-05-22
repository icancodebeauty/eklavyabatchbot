const mode = {parse_mode : "HTML"};
// Exporting Start Command
module.exports = (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  ctx.telegram.sendMessage(process.env.MYID, `[${ctx.message.from.first_name || "Unknown"}](tg://user?id=${ctx.message.from.id}) Has Used /start Command`, {parse_mode: "MARKDOWN"});
  ctx.reply(`<b>List Of Commands</b>
• /today - Gives Todays Mock Test Details
• /links - Gives All Social Media Links`, mode);
}
