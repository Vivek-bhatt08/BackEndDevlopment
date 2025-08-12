const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const USER = require("./model/user");
const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

//create
app.post("/users",async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let user={
        email:email,
        password:password
    }
    let newUser =  new USER(user);
    await newUser.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"user added successfully",
        data:newUser
    })


})
app.get("/fetchuser",async(req,res)=>{ //fetch data using find method
    let allUsers = await USER.find();
    res.json({
        success:true,
        message:"all blogs fetch successffully",
        data:allUsers
    })
})
app.get("/fetchuser/:id",async(req,res)=>{//finding blog by their id name
    let id = req.params.id;
    //we can use findBYiD and findByOne
    let user = await USER.findById(id);
    res.json({
        success:true,
        message:"blog fetch successfully",
        data:user
    })
})

app.listen(3000,()=>{
    console.log("server running on port 3000");
})