const express = require('express');
const router = express.Router();
const courseRoutes = require('./courses');
const userRoutes = require('./users');


router.use('/course', courseRoutes);
router.use('/users', userRoutes);


module.exports = router;