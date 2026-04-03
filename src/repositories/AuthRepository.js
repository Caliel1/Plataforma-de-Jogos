// Importamos o molde (Model) que acabamos de criar
const Usuario = require('../models/Usuario');

class AuthRepository {
    constructor() {
        // Agora usamos o 'new Usuario' para garantir que os dados sigam o padrão correto
        this.usuarios = [
            new Usuario(1, "Caliel", "caliel@teste.com", "123456")
        ];
    }

    buscarPorEmail(email) {
        return this.usuarios.find(usuario => usuario.email === email);
    }
}

module.exports = new AuthRepository();