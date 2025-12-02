const express = require("express");
const app = express();
const User = require("./model/userSchema");
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.post("/api/users/register",async(req,res)=>{
    const {name,email,password} = req.body;
    const userExist = await User.findOne({email});

    if(userExist){
        return res.json({
            success:false,
            message:"user already exists"
        })
    }

    let newUser = await User.create({
        name:name,
        email:email,
        password:password
    })
    res.json({
        success:true,
        message:"registraction successfull",
        data:newUser
    })

})

module.exports = app;