import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { login, password });
      localStorage.setItem('token', response.data.token);
      navigate('/activities');
    } catch (err) {
      setError('Login ou senha inválidos');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };


  return (
    <Container maxWidth="xs">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Login" fullWidth margin="normal" value={login} onChange={(e) => setLogin(e.target.value)} />
        <TextField label="Senha" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" variant="contained" fullWidth>Entrar</Button>
      </form>
      <Button onClick={goToRegister} variant="outlined" fullWidth sx={{ mt: 2 }}>
        Criar Conta
      </Button>
    </Container>
  );
};

export default Login;
