console.log("👉 THIS IS THE CORRECT SERVER.JS FILE RUNNING");
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerDocs = require('./swagger');
const contactsRoutes = require('./routes/contacts');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ No MongoDB connection string found in .env");
  process.exit(1);
}

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Contacts API 🚀');
});

// Contacts routes
app.use('/contacts', contactsRoutes);

// Swagger docs
swaggerDocs(app);

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
