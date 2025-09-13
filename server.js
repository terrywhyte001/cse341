const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();  // Load variables from .env

const app = express();

// Middleware
app.use(express.json());

// Import routes
const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Connect to MongoDB
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
