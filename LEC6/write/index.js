const fs=require("fs");

fs.writeFile("../demo.txt","Hello G27",function(err){
     if(err)
     {
        return console.log(err);
     }
     console.log("Success");
})