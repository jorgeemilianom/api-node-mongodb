// Este archivo solo queda como ejemplo/modelo
// 
// Deprecado
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true,
    },
    date: Date,
});

const model = mongoose.model('Menssage', mySchema);
module.exports = model;