const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

let blogRoutes = require("./routes/blogRoutes")
let userRoutes = require("./routes/userRoutes");

app.use("/api/blogs",blogRoutes);
app.use("/api/users",userRoutes);

const mongoose = require('mongoose'); //common js syntax
// import mongoose from 'mongoose'; //ES6 module syntax

mongoose.connect('mongodb://127.0.0.1:27017/G27DB')
  .then(() => console.log('Connected!'));



app.listen(3000,()=>{
    console.log("server running on port 3000");
})