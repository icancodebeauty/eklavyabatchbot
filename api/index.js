/* Imports */
const app = require('express')();
/* Routes */
app.use("/today", require("./routes/today"));
app.use("/socials", require("./routes/socials"));
/* `/` Endpoint */
app.get('/', function (req, res) {
    res.send({
        endpoints: {
            "/today": "Schedule Of Tests!!",
            "/socials": "All Social Media Links!!"
        }
    })
});
/* Listen To PORT */
// app.listen(process.env.PORT || 3000, () => {
//     console.log(`App Started On Port ${process.env.PORT || 3000}!`)
// });
module.exports = app;