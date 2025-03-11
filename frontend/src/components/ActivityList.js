import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await api.get('/activities', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setActivities(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivities();
  }, []);

  const updateStatus = async (id, newStatus) => {
    const token = localStorage.getItem('token');
    try {
      await api.put(`/activities/${id}/status`, { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } });
      setActivities(activities.map(act => act.id === id ? { ...act, status: newStatus } : act));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteActivity = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await api.delete(`/activities/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setActivities(prevActivities => prevActivities.filter(act => act.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Ao clicar em "Atualizar", navega para a rota de atualização, passando os dados da atividade
  const goToUpdate = (activity) => {
    navigate(`/update-activity/${activity.id}`, { state: { activity } });
  };

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Minhas Atividades
      </Typography>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id} divider>
            <ListItemText 
              primary={activity.name} 
              secondary={`Status: ${activity.status}`} 
            />
            {activity.status !== 'concluída' && (
              <Button onClick={() => updateStatus(activity.id, 'concluída')} variant="contained" sx={{ mr: 1 }}>
                Concluir
              </Button>
            )}
            <Button onClick={() => goToUpdate(activity)} variant="outlined" sx={{ mr: 1 }}>
              Atualizar
            </Button>
            <Button onClick={() => deleteActivity(activity.id)} variant="outlined" color="error">
              Deletar
            </Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => navigate('/create-activity')} variant="contained" sx={{ mt: 2 }}>
        Criar Nova Atividade
      </Button>
    </Container>
  );
};

export default ActivityList;
