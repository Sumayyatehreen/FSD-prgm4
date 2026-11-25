const express = require('express');
const router = express.Router();

// GET /college/marks/view
router.get('/view', (req, res) => {
  res.json({ message: 'Viewing all marks' });
});

// GET /college/marks/:id
router.get('/:id', (req, res) => {
  res.json({
    message: 'Viewing marks for student',
    studentId: req.params.id
  });
});

module.exports = router;
