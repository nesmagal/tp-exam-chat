const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permet à tous les domaines d’accéder à ton backend
app.use(express.json());

let messages = [];

// Routes
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { author, content } = req.body;
  messages.push({ author, content, timestamp: new Date() });
  res.status(201).json({ success: true });
});

app.listen(3000, () => console.log('Server running on port 3000'));


