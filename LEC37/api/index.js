const express = require("express");
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let path = require("./routes/order");
app.use("/api/v1/order",path);


app.listen(3000,()=>{
    console.log("server is running ....");
})
