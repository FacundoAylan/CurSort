const express = require('express');
const router = express.Router();
const {filterCourses,getCoursesByCategory} = require('../Controllers/index');

router
    .get('/', filterCourses)
    .get('/category', getCoursesByCategory)
module.exports = router;