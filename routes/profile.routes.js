const express = require('express');
const router = express.Router();

// GET /college/students/profile/view
router.get('/view', (req, res) => {
  res.json({ message: 'Viewing all student profiles' });
});

// GET /college/students/profile/:id
router.get('/:id', (req, res) => {
  res.json({
    message: 'Viewing student profile',
    studentId: req.params.id
  });
});

module.exports = router;
