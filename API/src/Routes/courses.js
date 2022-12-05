const { Router } = require('express');
const router = Router();
const {getAllCourses, getCourseById, postReview, loadCoursesToDB, getCourseByName} = require('../Controllers/index.js')

router.get('/', getAllCourses)
router.post('/load', loadCoursesToDB)
router.get('/:id', getCourseById)
router.post('/review', postReview)

module.exports = router;