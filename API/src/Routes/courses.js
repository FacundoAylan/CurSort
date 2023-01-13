const { Router } = require('express');
const router = Router();

const {
    postCourse, 
    getAllCourses, 
    getCourseById, 
    postReview,
    editCourse
} = require('../Controllers/index.js')

router
    .get('/', getAllCourses)
    .get('/:id', getCourseById)
    .post('/', postCourse)
    .post('/review', postReview)
    .put('/', editCourse)


module.exports = router;