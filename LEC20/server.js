const express = require("express");
const { m1, m2, checkAdmin } = require("./middleware/middleware");
const app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


let blogRoutes = require("./routes/blogRoutes");
// console.log(blogRoutes);
app.use(m1);
// app.use(m2);
app.get("/home",(req,res,next)=>{
    console.log("running controller home...")
    res.json({
        success:true,
        message:"welcome to home page"
    })
    next();
})


// app.use(m2); it will not run here controller function is also a middleware  if you call next in get then this middleware will run
app.use(m2);


app.get("/dashboard",checkAdmin,(req,res,next)=>{
    console.log("running checkadmin middleware")
    if(req.isAdmin){
        return res.json({
            success:true,
            message:"Admin dashboard"
        })
    }
    return res.json({
        success:false,
        message:"not authorised"
    })
})

app.use("/api/blogs",blogRoutes.router);


app.listen(3000,()=>{
    console.log("server running on port 3000");
})