// backend/routes/activityRoutes.js
const express = require('express');
const { createActivity, getActivities, updateStatus, deleteActivity } = require('../controllers/activityController');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.use(authenticate); // Todas as rotas abaixo exigem autenticação

router.post('/', createActivity);
router.get('/', getActivities);
router.put('/:id/status', updateStatus);
router.delete('/:id', deleteActivity);

module.exports = router;
