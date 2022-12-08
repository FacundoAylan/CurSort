const {Router} = require('express');
const {getCategories, postCategorie, getCoursesByCategory} = require('../Controllers/index');

router = Router();

router
    .get('/', getCategories)
    .post('/create', postCategorie)

module.exports = router;