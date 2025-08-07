const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.post("/adduser", (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        console.log(email, password);

        // Create a newUser object from request data
        let newUser = {
            email: email,
            password:password
        };

        res.json({
            success: true,
            data: newUser,
            message: "User added successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
});



app.listen(3000,()=>{
    console.log("server started at port 3000");
})