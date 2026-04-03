const AuthService = require('../services/AuthService');

class AuthController {
    login(req, res) {
        const { email, senha } = req.body;

        // Validação básica da requisição
        if (!email || !senha) {
            return res.status(400).json({ erro: "Email e senha são obrigatórios!" });
        }

        try {
            // Repassa a responsabilidade para o Service
            const dadosUsuario = AuthService.autenticar(email, senha);
            
            // Se o Service não der erro, devolvemos sucesso (Status 200)
            return res.status(200).json({ 
                mensagem: "Login realizado com sucesso!",
                dados: dadosUsuario
            });
            
        } catch (erro) {
            // Se o Service jogar um erro (ex: senha errada), o Controller captura aqui (Status 401)
            return res.status(401).json({ erro: erro.message });
        }
    }
}

module.exports = new AuthController();