const { Router } = require('express');
const axios = require('axios');
const courseRoutes = require('./courses');
const userRoutes = require('./users');

const router = Router();


router.use('/course', courseRoutes);
router.use('/users', userRoutes);


module.exports = router;










