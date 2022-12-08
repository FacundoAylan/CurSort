const {Router} = require('express');
const {getCategories, postCategorie, getCoursesByCategory} = require('../Controllers/index');

router = Router();

router
    .get('/', getCategories)
    .get('/:id', getCoursesByCategory)
    .post('/create', postCategorie)

module.exports = router;