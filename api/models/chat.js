var mongoose = require('mongoose');

var ChatSchema = new mongoose.Schema({
    id: Number,
    nama: String,
    chat: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', ChatSchema);