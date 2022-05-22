const chemistry = require("../keyboards/chemistry");
const physics = require("../keyboards/physics");
const maths = require("../keyboards/maths");
const biology = require("../keyboards/biology");
const keyboard = require("../keyboards/mainkeyboard")
module.exports = (ctx) => {
  console.log(ctx.callbackQuery.data)
  if(ctx.callbackQuery.data == "physics"){
    ctx.editMessageText(`<b>Select Chapter From Physics For Mock Test :</b>`, physics)
  } else
  if (ctx.callbackQuery.data == "chemistry"){
    ctx.editMessageText(`<b>Select Chapter From Chemistry For Mock Test :</b>`, chemistry)
  } else
  if (ctx.callbackQuery.data == "maths"){
    ctx.editMessageText(`<b>Select Chapter From Maths For Mock Test :</b>`, maths)
  } else
  if (ctx.callbackQuery.data == "biology"){
    ctx.editMessageText(`<b>Select Chapter From Biology For Mock Test :</b>`, biology)
  } else
  if (ctx.callbackQuery.data == "backk"){
    ctx.editMessageText(`<b>Select A Subject For Mock Test :</b>`, keyboard)
  }
}
