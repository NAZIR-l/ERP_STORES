const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Resource = mongoose.Schema({
    Name: String,
    Institution: String,
    Phone:Number,
    Address: {
        type: String,
        immutable: true
    },
    Email: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model('Resource', Resource);


