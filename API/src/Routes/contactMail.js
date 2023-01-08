const {Router} = require('express');


const { contactMail, linkMail} = require('../Controllers/index');


router = Router();

router.post("/send-link", linkMail)
router.post("/send-email", contactMail)
module.exports = router;