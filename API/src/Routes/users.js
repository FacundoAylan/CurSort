const express = require('express');
const router = express.Router();

const { disableUser, createUser, editUser } = require('../Controllers/index.js');


router
    .post('/create', createUser) // provisorio para prueba disableUser
    .put('/disable', disableUser)
    .put('/edit', editUser)

module.exports = router;