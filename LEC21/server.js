const express = require("express");
const app = express();
const mongoose  = require("mongoose");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
let {isLogin} = require("./middleware/middleware")

let loginRoutes = require("./routes/Login")
let registerRoutes = require("./routes/Register")

app.use("/api/login",loginRoutes);
app.use("/api/register",registerRoutes);

app.get("/home",isLogin,(req,res)=>{
    let email = req.email;
    res.json({
        success:true,
        message:"welcome" + email
    })
})




mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'));

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})