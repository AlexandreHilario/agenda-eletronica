import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Register = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { login, password });
      navigate('/login');
    } catch (err) {
      setError('Erro ao criar usuário');
    }
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="xs">
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Login" fullWidth margin="normal" value={login} onChange={(e) => setLogin(e.target.value)} />
        <TextField label="Senha" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" fullWidth>Criar Conta</Button>
      </form>
      <Button onClick={goToLogin} variant="outlined" fullWidth sx={{ mt: 2 }}>
        Já tem uma conta? Entrar
      </Button>
    </Container>
  );
};

export default Register;
