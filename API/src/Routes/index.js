const express = require("express");
const router = express.Router();
const courseRoutes = require('./courses.js');

router.use(express.json())
router.use('/course', courseRoutes)

module.exports = router;