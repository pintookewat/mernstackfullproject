const jwt = require("jsonwebtoken");
const Signup = require("../Userschema/signinSchema");






require("../Router/auth");
require('../index');

const Authenticate = async (req, res, next) => {
    try {


        const token = req.cookies.jwtoken;
        const verfiytoken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await Signup.findOne({ _id: verfiytoken._id, "tokens.token": token });

        if (!rootUser) {
            res.send("data is not found authetication")
        }

        req.token = token;
        req.rootUser = rootUser;
        req.UserID = rootUser._id;

        next();

    } catch (error) {
        // res.status(401).json("unautthorid : not token provided");
        console.log(error)
        res.send("/")


    }
}
module.exports = Authenticate;