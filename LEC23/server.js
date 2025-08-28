const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));

let loginRoute = require("./routes/auth")
app.use("/api/login",loginRoute);


let blogRoute = require("./routes/blogRoutes");
app.use("/api/blogs",blogRoute);


let userRoute = require("./routes/userRoutes");
app.use("/api/users",userRoute);


app.listen(3000,()=>{
    console.log("server running on port 3000");
})