const express = require('express');
const router = express.Router();

const { getAllCourses, getCourseById, getCourseByCategory } = require('../Controllers/index.js');


router
    .get('/', getAllCourses) // ruta demo para ver los cursos del json
    .get('/category', getCourseByCategory)
    .get('/:id', getCourseById)


module.exports = router;