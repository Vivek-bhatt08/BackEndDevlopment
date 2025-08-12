const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const Blog = require("./model/blog");
const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

//create
app.post("/blogs",async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let blog = {
        title:title,
        body:body,
        date:Date.now()
    }
    let newBlog =  new Blog(blog);
    await newBlog.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"blog added successfully",
        data:newBlog
    })


})


app.listen(3000,()=>{
    console.log("server running on port 3000");
})