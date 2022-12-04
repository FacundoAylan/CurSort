const { Router } = require('express');
const axios = require('axios');

const router = Router();


const courseRoutes = require('./courses');
const userRoutes = require('./users');

router.use('/course', courseRoutes);
router.use('/users', userRoutes);




























