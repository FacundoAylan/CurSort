const { Router } = require('express');
const router = Router();
const getAllApi = require('../Controllers/getAll.js')

router.get('/', async (req, res) => {
    let response = await getAllApi()
    res.send(response)
})

module.exports = router;