const {Router} = require('express');
const {getCategories, postCategorie} = require('../Controllers/index');

router = Router();

router.get('/', getCategories);
router.post('/create', postCategorie);

module.exports = router;