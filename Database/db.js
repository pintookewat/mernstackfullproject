const mongoose = require("mongoose");

require('dotenv').config();

const DB = process.env.DataBase;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Connect is done from DataBase")
}).catch((err) => {
    console.log(err)
})