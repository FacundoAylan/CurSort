const { Router } = require('express');
const router = Router();

const {postCourse, getAllCourses, getCourseById, postReview , disableCourse, editCourse, deleteCourse} = require('../Controllers/index.js')

router
    .post('/', postCourse)
    .get('/', getAllCourses)
    .get('/:id', getCourseById)
    .post('/review', postReview)
    .put('/disable/:id', disableCourse)
    .put('/edit/:id', editCourse)
    .delete('/delete/:id', deleteCourse)


module.exports = router;