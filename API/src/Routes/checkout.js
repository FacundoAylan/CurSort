const express = require('express');
const router = express.Router();
const { postPayment, postInformationBuyer, getOrders, linkMail } = require('../Controllers/index');


router
    .post('/information', postInformationBuyer)
    .post('/payment', postPayment, linkMail) //cuidado con excederse con los envios de mail
    .get('/orders', getOrders) // ruta de prueba para que vean como quedaron relacionadas las ordenes 

module.exports = router;