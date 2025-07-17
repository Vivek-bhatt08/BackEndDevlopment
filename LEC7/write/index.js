const fs = require("fs");
let users = [
    {
        id:1,
        name:"vansh",
        age:"20"
    },
    {
        id:2,
        name:"yash",
        age:"22"
    }
]

// const jsonData = JSON.stringify(users, null, 2);

// fs.writeFileSync("users.txt", jsonData, "utf-8");

// console.log("Data written to users.txt successfully!");

fs.writeFile("user1.txt",JSON.stringify(users),(err)=>{
    if(err){
        return console.log(err);
    }
    console.log("data written successfully")
})
