const { Router } = require('express');
const routeCourses = require('./courses.js')
const userRoutes = require('./users');
const categorias = require('./categorias');
const router = Router();



// router.use(express.json())
router.use('/courses', routeCourses)
router.use('/users', userRoutes);
router.use('/categories', categorias);


module.exports = router;


