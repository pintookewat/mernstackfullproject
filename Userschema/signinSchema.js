const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");




require('dotenv').config();
require("../Database/db");

// const SECRET_KEY = process.env.SECRET_KEY;


const signinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                required: true,
                type: String

            }
        }
    ]

});



signinSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.log(error)
    }
}


const Signup = mongoose.model("Signup", signinSchema);

module.exports = Signup;