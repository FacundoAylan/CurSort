const express = require('express');
const router = express.Router();
const courseRoutes = require('./courses');


router.use('/course', courseRoutes);


module.exports = router;