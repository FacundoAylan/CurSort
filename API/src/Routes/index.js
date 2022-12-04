
const { Router  } = require('express');
const axios = require('axios');
const routeCourses = require('./courses.js')

const router = express.Router();



router.use(express.json())
router.use('/courses', routeCourses)



module.exports = router;


