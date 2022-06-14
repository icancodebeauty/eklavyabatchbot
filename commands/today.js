const fetch = require("cross-fetch");
const moment = require("moment-timezone");
const client = require("../modules/postgresql");
const mode = {parse_mode : "HTML"};
const date = moment().tz("Asia/Kolkata").format("DD");
const fulldate = moment().tz("Asia/Kolkata").format("MMMM Do YYYY");
// Exporting Today Command
module.exports = async (ctx) => {
  ctx.telegram.sendChatAction(ctx.chat.id, "typing");
  client.query(`SELECT * FROM "schedule" WHERE "date" = ${date};`, (err, res) => {
    if(!err){
      if(res.rows.length == "0"){
        ctx.reply(`<b>❌ No Mock Tests Today!</b>\n\n👨🏻‍🎓 Go And Revise Chapters!\n🥇 You Will Be Topper!`, mode);
      } else {
        ctx.reply(`<b>✅ Today's Mock Test Details</b>

📅 Date - ${fulldate}
📚 Subject - ${res.rows[0].subject}
📖 Chapter - ${res.rows[0].chapter}`, mode);
      }
    } else {
      ctx.reply(`<b>💽 Some Error Happened In Database!</b>\n🧑🏻 Contact Admin Please!`, mode);
    }
  })
}
