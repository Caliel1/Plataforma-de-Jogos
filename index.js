const express = require('express');
const path = require('path'); // Módulo nativo do Node para lidar com caminhos de pastas
const app = express();
const port = 3000;

// Permite que nossa API receba dados no formato JSON
app.use(express.json());

// ENSINANDO O EXPRESS A MOSTRAR O FRONTEND
// Isso diz pro servidor: "Tudo que estiver na pasta 'frontend', pode exibir no navegador"
app.use(express.static(path.join(__dirname, 'frontend')));

// Importando as rotas de autenticação (Nossa API)
const authRoutes = require('./src/routes/authRoutes');
app.use('/api/auth', authRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});