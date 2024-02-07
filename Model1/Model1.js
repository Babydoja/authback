const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  to: String,
  subject: String,
  body: String
});

const EmailModel = mongoose.model('Email', emailSchema);

module.exports = EmailModel;
