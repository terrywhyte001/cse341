const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true }
});

// force it to use 'contacts' collection
module.exports = mongoose.model('Contact', contactSchema, 'contacts');
