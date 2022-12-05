const { Router } = require('express');
const routeCourses = require('./courses.js')
const userRoutes = require('./users');
const router = Router();



// router.use(express.json())
router.use('/courses', routeCourses)
router.use('/users', userRoutes);


module.exports = router;


