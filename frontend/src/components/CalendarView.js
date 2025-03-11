import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Container, Typography } from '@mui/material';
import api from '../services/api';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await api.get('/activities', {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Mapeia as atividades para o formato do calendário
        const mappedEvents = response.data.map(activity => ({
          id: activity.id,
          title: activity.name,
          start: new Date(activity.start_time),
          end: new Date(activity.end_time),
          allDay: false
        }));
        setEvents(mappedEvents);
      } catch (err) {
        console.error(err);
      }
    };
    fetchActivities();
  }, []);

  return (
    <Container>
      <Typography variant="h5" component="h2" gutterBottom>
        Calendário de Atividades
      </Typography>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </Container>
  );
};

export default CalendarView;
