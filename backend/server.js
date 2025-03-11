// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Rotas
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');

app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);

// Sincroniza o banco e inicia o servidor
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
    app.listen(process.env.PORT || 5000, () => {
      console.log('Servidor rodando na porta 5000...');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
