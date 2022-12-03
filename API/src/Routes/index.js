const express = require("express");
const { Router } = require('express');
const home = require('./home.js');
const router = Router();

router.use(express.json())
router.use('/home', home)

module.exports = router;