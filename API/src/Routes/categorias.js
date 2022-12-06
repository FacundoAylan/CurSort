const {Router} = require('express');
const {getCategories} = require('../Controllers/index');

router = Router();

router.get('/', getCategories);

module.exports = router;