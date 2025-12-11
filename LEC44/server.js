const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const mongoose = require("mongoose")

app.get("/",(req,res)=>{
    res.send("hello world");
})
mongoose.connect("mongodb://mongo:27017/test")
.then(()=>{
    console.log("mongo db connected")
})
.catch((e)=>{
    console.log(e.message);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})