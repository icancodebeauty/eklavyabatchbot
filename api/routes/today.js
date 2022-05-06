/* Imports */
const express = require('express');
const { Deta } = require('deta');
require("dotenv").config();
/* Configuration */
const router = express.Router();
const deta = Deta(process.env.DETAKEY);
const db = deta.Base('eklavya');
/* `/today` Endpoint */
router.get("/", async (req, res) => {
  const date = new Date();
  const day = date.getDate();
  const today = await db.get(String(day));
  if(today){
    res.send(today)
  } else {
    res.send({key: "0"})
  }
});
/* Export Router */
module.exports = router;
