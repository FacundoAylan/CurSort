const express = require('express');
const router = express.Router();
const { postPayment, postInformationBuyer, getOrders } = require('../Controllers/index');


router
    .post('/information', postInformationBuyer)
    .post('/payment', postPayment)
    .get('/orders', getOrders) // ruta de prueba para que vean como quedaron relacionadas las ordenes 

module.exports = router;