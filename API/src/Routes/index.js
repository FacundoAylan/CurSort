const { Router } = require('express');
const axios = require('axios');
const routeCourses = require('./courses.js')

const router = Router();

router.use('/courses', routeCourses)

module.exports = router;
