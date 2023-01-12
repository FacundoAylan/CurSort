const express = require('express');
const router = express.Router();
const {getCategories, postCategory} = require('../Controllers/index');



router
    .get('/', getCategories)
    .post('/', postCategory)

module.exports = router;
