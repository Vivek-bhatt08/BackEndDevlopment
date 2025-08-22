const express = require("express");
const router = express.Router();
const UserModel = require("../model/user");  
const jwt = require("jsonwebtoken");


router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email, password });

        if (user) {
            let token = jwt.sign({"user":user},"okkk") //(user,secret key);
            res.json({
                success:true,
                message:"login successful...",
                token:token
            });
        } else {
            res.json({
                success:false,
                message:"invalid user..."
            });
        }
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
