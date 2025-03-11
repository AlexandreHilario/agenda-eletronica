# Projeto Agenda Eletrônica

Este projeto é uma aplicação de agenda eletrônica desenvolvida utilizando React para o frontend e Node.js (Express) para o backend, com um banco de dados MySQL para gerenciar usuários e atividades.

## Estrutura do Projeto

```
electronic-agenda
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── config
│   │   └── app.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── README.md
├── README.md
└── .gitignore
```

## Funcionalidades

- **Cadastro e Login de Usuários**: Permite que usuários criem uma conta e façam login para acessar suas atividades.
- **Interface CRUD para Atividades**: Usuários podem criar, visualizar, atualizar e excluir suas atividades.
- **Visualização em Calendário**: Interface amigável para exibição das atividades no formato de calendário.

## Tecnologias Utilizadas

- **Frontend**: React.js
- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL

## Como Começar

### Pré-requisitos

- Node.js
- MySQL

### Instalação

1. Clone o repositório:
   ```
   git clone <repository-url>
   ```

2. Acesse o diretório do backend e instale as dependências:
   ```
   cd backend
   npm install
   ```

3. Configure o banco de dados MySQL e ajuste a conexão no arquivo `backend/src/config/dbConfig.js`.

4. Acesse o diretório do frontend e instale as dependências:
   ```
   cd frontend
   npm install
   ```

5. Inicie o servidor backend:
   ```
   cd backend
   npm start
   ```

6. Inicie a aplicação frontend:
   ```
   cd frontend
   npm start
   ```

## Contribuição

Contribuições são bem-vindas! Caso queira sugerir melhorias ou novas funcionalidades, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.

