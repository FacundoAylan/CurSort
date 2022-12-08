const { Router } = require('express');
const routeCourses = require('./courses.js')
const userRoutes = require('./users');
const categories = require('./categories');
const router = Router();



// router.use(express.json())
router
    .use('/courses', routeCourses)
    .use('/users', userRoutes)
    .use('/categories', categories)


module.exports = router;


