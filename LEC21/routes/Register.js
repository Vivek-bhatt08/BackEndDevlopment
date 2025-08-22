const express = require("express");
const router = express.Router();
let UserModel = require("../model/user");

router.post("/", async (req, res) => {
    try {
        let { email, password } = req.body;
        let userExist  = await UserModel.findOne({email});
        if(userExist){
            return res.json({
                success:false,
                message:"user exist with given email and password"
            })
        }
        let user = {
            email:email,
            password:password
        }
        let newUser = new UserModel(user);
        await newUser.save();
        res.json({
            success:true,
            message:"Registration successful..."
        })

    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
