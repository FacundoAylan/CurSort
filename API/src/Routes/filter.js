const express = require('express');
const router = express.Router();
const {filterCourses} = require('../Controllers/index');

router
    .get('/', filterCourses)

module.exports = router;