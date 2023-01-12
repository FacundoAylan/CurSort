const express = require('express');
const router = express.Router();
const { contactMail, linkMail} = require('../Controllers/index');



router
    .post("/send-link", linkMail)
    .post("/send-email", contactMail)
module.exports = router;