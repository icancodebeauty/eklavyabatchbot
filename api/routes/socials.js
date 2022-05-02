/* Imports */
const express = require('express');
const router = express.Router();
/* `/socials` Endpoint */
router.get("/", (req, res) => {
    res.send({
        instagram: "https://www.instagram.com/eklavyabatch",
        telegram: "https://t.me/EklavyaBatch2",
        website: "https://www.eklavyabatch.com"
    })
});
/* Export Router */
module.exports = router;