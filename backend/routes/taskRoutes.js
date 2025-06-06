const express = require('express');
const {protect, adminOnly} = require('../middlewares/authMiddleware');
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updatedTaskStatus, updateTaskChecklist } = require('../controllers/taskController');

const router = express.Router();

// Task Management Routes
router.get('/dashboard-data', protect, getDashboardData);
router.get('/user-dashboard-data', protect, getUserDashboardData);
router.get('/',protect, getTasks); // Get all tasks
router.get('/:id', protect, getTaskById); // Get a task by ID
router.post('/', protect, adminOnly, createTask); // Create a new task (Admin only)
router.put('/:id', protect, updateTask); // Update a task (Admin only)
router.delete('/:id', protect, adminOnly, deleteTask); // Delete a task (Admin only)
router.put('/:id/status', protect, updatedTaskStatus); // Update task status
router.put('/:id/todo', protect, updateTaskChecklist); // Update task checklist

module.exports = router;