const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },

    phone: {
        required: true,
        type: Number
    },
    location: {
        required: true,
        type: String
    },
    message: {
        required: true,
        type: String
    }

})

const USER = mongoose.model("USER", UserSchema);

module.exports = USER;