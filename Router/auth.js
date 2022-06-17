const express = require("express");
const router = express();
const mongoose = require("mongoose");
const User = require("../Userschema/userSchema");
const Signup = require("../Userschema/signinSchema");
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");
const cookieParser = require("cookie-parser");
const path = require('path');


router.use(cookieParser());
require("../Database/db");
require('../index');




router.get('/logout', (req, res) => {
    res.clearCookie('jwtoken', { path: "/" })
    console.log("hello this is logout page")
    res.json("you are logout")

});

router.get('/about', authenticate, (req, res) => {
    res.send(req.rootUser)

});




router.post('/signin', async (req, res,) => {
    try {

        var { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json(alert('Fill the from'));

        }

        var userLogin = await Signup.findOne({ email: email })



        if (!userLogin) {

            return res.status(422).json({ error: "Email is not exits" })
        } else if (password != userLogin.password) {
            return res.status(422).json({ error: "Password is incorerect" })
        } else {
            var token = await userLogin.generateAuthToken();

            res.cookie('jwtoken', token, {
                expires: new Date(Date.now() + 288920000),
                httpOnly: true
            });
            res.redirect("/");



            console.log(token);

        };


    } catch (err) {
        console.log(err)
    }



});






router.post('/contact', async (req, res) => {

    try {
        const { name, email, phone, location, message } = req.body;

        if (!name || !email || !phone || !location || !message) {
            console.log(Error)
        } else {
            const users = new User({ name, email, phone, location, message })
            const data = await users.save();
            window.alert("Form submited")
        }

    } catch (Error) {
        console.log(Error)
    };
});



router.post('/signup', async (req, res) => {

    try {

        const { name, email, password, cpassword } = req.body;

        const userExits = await Signup.findOne({ email: email });

        if (userExits) {
            return res.status(422).json({ error: "Email already have" })
        }

        if (password != cpassword) {

            return res.status(422).json({ error: "Password is not same" })
        }

        if (!name || !email || !password || !cpassword) {
            console.log(Error)
        } else {

            const out = new Signup({ name, email, password, cpassword })
            const data = await out.save();

        }

    } catch (Error) {
        console.log(Error)
    }

})








module.exports = router;