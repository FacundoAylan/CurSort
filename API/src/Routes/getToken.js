const {Router} = require('express');
const {getToken} = require('../Controllers/index');

const ruta = Router();

ruta.get('/', getToken);

module.exports = ruta;