const express = require('express');
const router = express.Router();

const PrecoController = require('../controllers/precos');
const UsuarioController = require('../controllers/usuarios');

// Routes para usuario
router.get('/usuarios', UsuarioController.listarUsuario); // Listar usuarios
router.post('/usuarios', UsuarioController.cadastrarUsuario); // Cadastrar usuarios
router.patch('/usuarios', UsuarioController.editarUsuario); // Editar usuarios
router.delete('/usuarios', UsuarioController.apagarUsuario); // Apagar usuarios

// Routes para precos
router.get('/precos', PrecoController.listarPreco); // Listar precos
router.post('/precos', PrecoController.cadastrarPreco); // Cadastrar precos
router.patch('/precos', PrecoController.editarPreco); // Editar precos
router.delete('/precos', PrecoController.apagarPreco); // Apagar precos


module.exports = router;
