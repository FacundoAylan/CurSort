const express = require('express');
const router = express.Router();

const { disableUser, createUser, editUser, getUsers, disableAdmin, deleteUser, getUserEmail, } = require('../Controllers/index.js');
const autorization = require('../middleware/autorization.js');


router
    .post('/create', createUser) // provisorio para prueba disableUser
    .put('/disable', disableUser)
    .put('/disableAdmin', disableAdmin)
    .put('/delete', deleteUser)
    .put('/edit', editUser)
    .get('/getUsers', getUsers)
    .get('/userEmail',getUserEmail )

module.exports = router;