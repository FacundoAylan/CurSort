const express = require('express');
const router = express.Router();

const { disableUser, createUser } = require('../Controllers/index.js');


router
    .post('/create', createUser) // provisorio para prueba disableUser
    .put('/disable/', disableUser)


module.exports = router;