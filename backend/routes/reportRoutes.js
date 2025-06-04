const express = require('express');
const { adminOnly, protect } = require('../middlewares/authMiddleware');
const { exportTasksReport, exportUsersReport } = require('../controllers/reportController');

const router = express.Router();

// Report Management Routes
router.get('/export/tasks', protect, adminOnly, exportTasksReport); // Export all tasks as Excel/PDF
router.get('/export/users', protect, adminOnly, exportUsersReport); // Export all user-task report

module.exports = router;