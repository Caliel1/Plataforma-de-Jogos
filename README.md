# Plataforma-de-Jogos
Atividade do slide 04 de arquitetura de software com o tema de plataforma de jogos

# 🎮 Cloud Play Store

Este é um projeto acadêmico desenvolvido para a disciplina de Arquitetura de Software, focado na implementação de uma **Arquitetura em Camadas** utilizando Node.js.

O sistema simula o fluxo de uma plataforma de venda de jogos digitais, contemplando desde a interface do usuário (Frontend) até a estruturação da API e modelagem de dados (Backend).

## 🏛️ Arquitetura do Projeto

O backend foi estruturado seguindo o padrão de separação de responsabilidades em camadas:

- **Routes (Apresentação):** Intercepta as requisições HTTP e as direciona.
- **Controllers (Controle):** Recebe os dados, faz validações iniciais e chama as regras de negócio.
- **Services (Regra de Negócio):** Contém a lógica central do sistema (ex: validação de login).
- **Repositories (Acesso a Dados):** Responsável por simular a comunicação com o banco de dados.
- **Models (Entidades):** Define a estrutura e os moldes dos dados (ex: classe Usuario, Jogo, Pedido).

## 🚀 Tecnologias Utilizadas

- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3 puros (servidos estaticamente pelo Express)

## ⚙️ Como executar o projeto na sua máquina

Siga os passos abaixo para testar a aplicação localmente:

1. Clone ou baixe este repositório.
2. Abra o terminal na pasta raiz do projeto.
3. Instale as dependências do Node (isso criará a pasta `node_modules`):
   ```bash
   npm install
