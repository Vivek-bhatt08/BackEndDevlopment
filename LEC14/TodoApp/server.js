const express= require("express");
const app = express();
const port = 3000;
app.use(express.static(__dirname+"/public"));
const fs = require("fs");

app.get("/todo",(req,res)=>{
    fs.readFile("todo.json","utf-8",(err,data)=>{
        if(err) {
            console.log(err);
        }
        res.json(JSON.parse(data));
    })
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})