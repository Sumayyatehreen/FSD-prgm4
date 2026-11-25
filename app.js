const express = require('express');
const app = express();

const collegeRoutes = require('./routes/college.routes');

// Built-in middleware to parse incoming JSON payloads
app.use(express.json());

// Mount the /college hierarchical router
app.use('/college', collegeRoutes);

// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
