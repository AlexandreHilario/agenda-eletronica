import React, { useState } from 'react';
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ActivityForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [status, setStatus] = useState('pendente'); // Valor padrão

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await api.post('/activities', { name, description, start_time, end_time, status }, { headers: { Authorization: `Bearer ${token}` } });
      navigate('/activities');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container maxWidth="xs">
      <h2>Criar Atividade</h2>
      <form onSubmit={handleSubmit}>
        <TextField 
          label="Nome" 
          fullWidth 
          margin="normal" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <TextField 
          label="Descrição" 
          fullWidth 
          margin="normal" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <TextField 
          label="Data e Hora de Início" 
          type="datetime-local" 
          fullWidth 
          margin="normal" 
          InputLabelProps={{ shrink: true }} 
          value={start_time} 
          onChange={(e) => setStartTime(e.target.value)} 
        />
        <TextField 
          label="Data e Hora de Término" 
          type="datetime-local" 
          fullWidth 
          margin="normal" 
          InputLabelProps={{ shrink: true }} 
          value={end_time} 
          onChange={(e) => setEndTime(e.target.value)} 
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="pendente">Pendente</MenuItem>
            <MenuItem value="concluída">Concluída</MenuItem>
            <MenuItem value="cancelada">Cancelada</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth>
          Criar Atividade
        </Button>
      </form>
      <Button onClick={() => navigate('/activities')} variant="outlined" fullWidth sx={{ mt: 2 }}>
        Voltar para a Lista de Atividades
      </Button>
    </Container>
  );
};

export default ActivityForm;
