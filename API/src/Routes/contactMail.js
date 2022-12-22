const {Router} = require('express');


const { contactMail} = require('../Controllers/index');


router = Router();

router.post("/send-email", contactMail)

module.exports = router;