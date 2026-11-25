const express = require('express');
const router = express.Router();

const logger = require('../middleware/logger');
const profileRoutes = require('./profile.routes');

// Middleware Logging scoped to /college/students and its nested routes
router.use(logger);

// Mount /profile under /college/students
router.use('/profile', profileRoutes);

module.exports = router;
