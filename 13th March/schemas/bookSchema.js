const mongoose = require('mongoose');
const connection = mongoose.connection;

const book = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    author : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    }
});

const BookModel = connection.model('Book', book);

module.exports = {BookModel};