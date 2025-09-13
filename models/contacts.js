const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  favoriteColor: String,
  birthday: String
});

// Force it to use the "contacts" collection in "contactsDB"
module.exports = mongoose.model('Contact', contactSchema, 'contacts');
