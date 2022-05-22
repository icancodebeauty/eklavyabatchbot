const chemistry = require("../keyboards/chemistry");
const physics = require("../keyboards/physics");
const maths = require("../keyboards/maths");
const biology = require("../keyboards/biology");
module.exports = (ctx) => {
  console.log(ctx.callbackQuery.data)
  if(ctx.callbackQuery.data == "physics"){
    ctx.editMessageText(`Select Chapter From Physics`, physics)
  } else
  if (ctx.callbackQuery.data == "chemistry"){
    ctx.editMessageText(`Select Chapter From Chemistry`, chemistry)
  } else
  if (ctx.callbackQuery.data == "maths"){
    ctx.editMessageText(`Select Chapter From Maths`, maths)
  } else
  if (ctx.callbackQuery.data == "biology"){
    ctx.editMessageText(`Select Chapter From Biology`, biology)
  }
}
