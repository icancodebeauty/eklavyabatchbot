const mode = {parse_mode : "HTML"};
// Exporting Start Command
module.exports = (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  ctx.reply(`<b>List Of Commands</b>
• /today - Gives Todays Mock Test Details
• /links - Gives All Social Media Links`, mode);
}
