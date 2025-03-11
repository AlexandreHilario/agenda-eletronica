import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button, Container } from '@mui/material';
import api from '../services/api';

const ActivityList = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const token = localStorage.getItem('token');
      const response = await api.get('/activities', { headers: { Authorization: `Bearer ${token}` } });
      setActivities(response.data);
    };
    fetchActivities();
  }, []);

  const updateStatus = async (id, newStatus) => {
    const token = localStorage.getItem('token');
    await api.put(`/activities/${id}/status`, { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } });
    setActivities(activities.map(act => act.id === id ? { ...act, status: newStatus } : act));
  };

  return (
    <Container>
      <h2>Minhas Atividades</h2>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.name} secondary={`Status: ${activity.status}`} />
            {activity.status !== 'concluída' && (
              <Button onClick={() => updateStatus(activity.id, 'concluída')} variant="contained">Concluir</Button>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ActivityList;
