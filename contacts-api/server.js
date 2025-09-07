const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const contactsRoute = require('./routes/contacts');
app.use('/contacts', contactsRoute);

// Test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
