const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/users",(req,res)=>{
    try {
        const email= req.body.email;
        const password = req.body.password;
        console.log(email,password);
        res.json({
            success : true,
            message: "User created successfully",
            user: {
                email: email,
                password: password
            }
                
        })
    } catch (error) {
        res.json({
            success : false,
            message: "Error creating user",
            error: error.message
        })
    }
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})