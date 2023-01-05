const { Router } = require('express');
const router = Router();

const {postCourse, getAllCourses, getCourseById, postReview} = require('../Controllers/index.js')

router
    .post('/', postCourse)
    .get('/', getAllCourses)
    .get('/:id', getCourseById)
    .post('/review', postReview)


module.exports = router;