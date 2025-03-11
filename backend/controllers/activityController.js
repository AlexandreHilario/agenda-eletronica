// backend/controllers/activityController.js
const Activity = require('../models/activityModel');

const createActivity = async (req, res) => {
  const { name, description, start_time, end_time } = req.body;
  try {
    const activity = await Activity.create({ name, description, start_time, end_time, userId: req.userId });
    res.status(201).json({ message: 'Atividade criada com sucesso', activity });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar atividade', error });
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({ where: { userId: req.userId } });
    res.json(activities);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar atividades', error });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const activity = await Activity.findByPk(id);
    if (!activity) return res.status(404).json({ message: 'Atividade não encontrada' });
    activity.status = status;
    await activity.save();
    res.json({ message: 'Status atualizado', activity });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar status', error });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    await Activity.destroy({ where: { id } });
    res.status(200).json({ message: 'Activity deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete activity' });
  }
};

module.exports = {
  createActivity,
  getActivities,
  updateStatus,
  deleteActivity,
};
