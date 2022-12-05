const { Router } = require('express');
const routeCourses = require('./courses.js')

const router = Router();



// router.use(express.json())
router.use('/courses', routeCourses)



module.exports = router;


