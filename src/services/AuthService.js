const AuthRepository = require('../repositories/AuthRepository');

class AuthService {
    autenticar(email, senha) {
        // 1. Pede para o Repository buscar o usuário no banco
        const usuario = AuthRepository.buscarPorEmail(email);

        // 2. Regra de negócio: Usuário não existe?
        if (!usuario) {
            throw new Error("Usuário não encontrado.");
        }

        // 3. Regra de negócio: A senha bate com a do banco?
        if (usuario.senha !== senha) {
            throw new Error("Senha incorreta.");
        }

        // Se passar por tudo, o login é sucesso! 
        // Retornamos os dados (escondendo a senha por segurança)
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: "token_seguro_123" 
        };
    }
}

module.exports = new AuthService();