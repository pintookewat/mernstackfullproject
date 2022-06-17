const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));





require('dotenv').config();
app.use(require("./Router/auth"));
app.use(express.json());
require('./Database/db');
app.use(cors());
app.use(cookieParser());


const Port = process.env.PORT;


// app.get("/", (req, res) => {
//     res.send("hello sir ")

// });

app.get("/contact", async (req, res) => {
    res.send("hello sir  this is contact page")


});


if(process.env.port){
    app.use(express.static('client/build'))
}


app.listen(Port, () => {
    console.log("connection is done")
});