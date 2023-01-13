const { Router } = require('express');
const router = Router();

const {
    postCourse, 
    getAllCourses, 
    getCourseById, 
    postReview,
    editCourse
    disableCourse,
    deleteCourse
} = require('../Controllers/index.js')

router
    .get('/', getAllCourses)
    .get('/:id', getCourseById)
    .post('/', postCourse)
    .post('/review', postReview)
    .put('/', editCourse)
    .put('/disable/:id', disableCourse)
    .put('/delete/:id', deleteCourse)

module.exports = router;