const { Router } = require('express');
const routeCourses = require('./courses.js')
const userRoutes = require('./users');
const categories = require('./categories');
const filter = require('./filter');
const contactMail = require('./contactMail')
const checkout = require('./checkout');
const token = require('./getToken');
const router = Router();



// router.use(express.json())
router
    .use('/courses', routeCourses)
    .use('/users', userRoutes)
    .use('/categories', categories)
    .use('/filter', filter)
    .use('/contact', contactMail )
    .use('/checkout', checkout)
    .use('/getToken', token);

module.exports = router;


