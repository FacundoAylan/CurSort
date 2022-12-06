const {Router} = require('express');
const {getCategories} = require('../Controllers/index');

const router = Router();

router.get('/', getCategories);

module.exports = router;