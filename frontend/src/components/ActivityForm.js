import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';
import api from '../services/api';

const ActivityForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await api.post('/activities', { name, description, start_time, end_time }, { headers: { Authorization: `Bearer ${token}` } });
    // Opcional: limpe o formulário ou redirecione para a lista
  };

  return (
    <Container maxWidth="xs">
      <h2>Criar Atividade</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Nome" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Descrição" fullWidth margin="normal" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField label="Data e Hora de Início" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={start_time} onChange={(e) => setStartTime(e.target.value)} />
        <TextField label="Data e Hora de Término" type="datetime-local" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={end_time} onChange={(e) => setEndTime(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth>Criar Atividade</Button>
      </form>
    </Container>
  );
};

export default ActivityForm;
