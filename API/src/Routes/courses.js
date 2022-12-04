const { Router } = require('express');
const router = Router();

const {postCourse} = require('../Controllers/index.js')

router
  .post('/', postCourse)

module.exports = router;