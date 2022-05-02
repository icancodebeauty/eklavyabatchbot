/* Imports */
const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const router = express.Router();
/* `/today` Endpoint */
router.get("/", (req, res) => {
    request('https://www.eklavyabatch.com/p/test-schedule-of-eklavya-batch-for-mht.html', function (error, response, body) {
        if (!error) {
            const $ = cheerio.load(body)
            $("tbody tr").each(function () {
                console.log($(this).children("td").first().text().trim().replaceAll("-", " ").replace(" 22", " 2022"));
            });
        }
    });
});
/* Export Router */
module.exports = router;