
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true , unique : true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', UsersSchema);