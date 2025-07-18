const express = require("express");
const app = express();
// console.log(app);

app.get("/",(req,res)=>{
    // console.log(req);
    // res.send("Hello World");
    // res.send("<h1> Hi Vivek </h1>");
    res.json({
        name:"Vivek",
        address:"delhi",
        isLogin:true
    });
})
app.get("/home",(req,res)=>{
    res.send("Welcome to Home Page");
});

app.get("/blogs",(req,res)=>{
    res.json([
        {title:"Blog 1",author:"Vivek"},
        {title:"Blog 2",author:"Rahul"},
        {title:"Blog 3",author:"Rohan"},
    ]);
})

//path param/variable!
//1.params
app.get("/users/:id",(req,res)=>{ //iski info url me he dalegi 
    // console.log(req);
    console.log(req.params);
    console.log(req.params.id);
    res.send(`User ID is ${req.params.id}`);
})

//2.query parameter
app.get("/users",(req,res)=>{
    console.log(req.query);
    // res.send("Hello World");
    res.send(`User Name is ${req.query.name} and rollno is ${req.query.rollno}`);
});


app.listen(2222,()=>{
    console.log("server started ...");    
})//portnumber - communication end point 