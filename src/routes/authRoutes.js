const express = require('express');
const router = express.Router();

// Importando o nosso Controller
const AuthController = require('../controllers/AuthController');

// Definindo a rota POST para '/login'
// Quando alguém fizer um POST aqui, o AuthController.login vai assumir o controle
router.post('/login', AuthController.login);

module.exports = router;