const express = require('express');
const router = express.Router();

const { disableUser, createUser, editUser, getUsers } = require('../Controllers/index.js');
const autorization = require('../middleware/autorization.js');


router
    .post('/create', createUser) // provisorio para prueba disableUser
    .put('/disable', disableUser)
    .put('/edit', editUser)
    .get('/getUsers', autorization, getUsers)

module.exports = router;