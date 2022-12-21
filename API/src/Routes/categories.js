const {Router} = require('express');
const {getCategories, postCategory} = require('../Controllers/index');

router = Router();

router
    .get('/', getCategories)
    .post('/', postCategory)

module.exports = router;
