module.exports = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "Physics", callback_data: "physics" }],
      [{ text: "Chemistry", callback_data: "chemistry" }],
      [{ text: "Maths", callback_data: "maths" }],
      [{ text: "Biology", callback_data: "biology" }]
    ]
  },
  parse_mode: "HTML"
}
