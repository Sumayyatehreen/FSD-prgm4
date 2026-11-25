const express = require('express');
const router = express.Router();

const studentsRoutes = require('./students.routes');
const marksRoutes = require('./marks.routes');

// Mount sub-routers under /college
router.use('/students', studentsRoutes);
router.use('/marks', marksRoutes);

module.exports = router;
