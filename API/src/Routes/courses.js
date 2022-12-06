const { Router } = require('express');
const router = Router();

const {postCourse, 
    getAllCourses, 
    getCourseById, 
    postReview, 
    loadCoursesToDB} 
    = require('../Controllers/index.js')

router.post('/', postCourse)
router.get('/', getAllCourses)
router.post('/load', loadCoursesToDB)
router.get('/:id', getCourseById)
router.post('/review', postReview)


module.exports = router;