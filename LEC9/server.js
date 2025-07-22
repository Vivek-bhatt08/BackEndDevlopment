const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());


app.post("/",(req,res)=>{
    // console.log(req.body);
    const name = req.body.name;
    const id = req.body.id;
    
    fs.readFile("data.txt","utf-8",function (err,data) {
        let arr=[];
        if(!err && data!=""){
            arr=JSON.parse(data);
        }
        arr.push({
            name:name,
            id:id
        });
        fs.writeFile("data.txt",JSON.stringify(arr),function(err){
            if(err) {
                console.log(err);
                return;
            }
            res.json({message:"do did done...",data:arr});
        });
    });
});


app.listen(3000,()=>{
    console.log(`server is running`);
})
