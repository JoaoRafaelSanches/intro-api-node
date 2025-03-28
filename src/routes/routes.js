const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/usuarios');
const PrecosController = require('../controllers/precos');

router.get('/usuarios', UsuariosController.listarUsuarios);
router.get('/usuarios', PrecosController.listarPrecos);

module.exports = router;