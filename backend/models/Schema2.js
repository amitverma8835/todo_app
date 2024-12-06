const mongoose = require('mongoose');

const Schema2 = new mongoose.Schema({
        title:{type:String, required: true},
        description:{type:String, required: true}
})

module.exports = mongoose.model('todos_data', Schema2);