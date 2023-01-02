const express = require('express');
const router = express.Router();
const { postPayment } = require('../Controllers/index');


router
    .post('/payment', postPayment)

module.exports = router;