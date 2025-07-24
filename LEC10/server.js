const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"))
// app.use(express.json());
//form se data url encode me hota usko parse krne ke liye 
app.use(express.urlencoded({extended:true}));

const fs = require("fs");


// app.get("/",(req,res)=>{
//     // res.sendFile("G:/5th sem/BackEndDevlopment/LEC10/index.html");//it acceps only absolute path ....
//     res.sendFile(__dirname+"/index.html"); //dirname se dierectory tk ka path aajata
// })

// app.get("/about.html",(req,res)=>{ //ab haar kisi ke liye toh end point nhi banayenge agr 50 file hui toh 50 end point thodi bnayenge
//     res.sendFile(__dirname+"/about.html");
// })

//public folder me static files daldi or ab saari file browser me bhejdo ...
//fer koi get request ki jarurat nhi hai 
app.post("/addUser",(req,res)=>{//ye endpoint form ke action ke feild me add krna hai ..
    console.log(req.body);
    let username = req.body.username;
    let password = req.body.password;
    const content = `Username: ${username}, Password: ${password}\n`;

    fs.appendFileSync("data.txt",content);

    // res.json({
    //     username,
    //     password
    // });
    res.send("thanks for registration .....");
   
    
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})