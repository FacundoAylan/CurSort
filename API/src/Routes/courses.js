const { Router } = require('express');
const router = Router();

const {postCourse, 
    getAllCourses, 
    getCourseById, 
    postReview, 
    loadCoursesToDB,
    editCourse } 
    = require('../Controllers/index.js')

router
    .post('/', postCourse)
    .get('/', getAllCourses)
    .get('/:id', getCourseById)
    .post('/review', postReview)
    .put('/coursedetail', editCourse)


module.exports = router;