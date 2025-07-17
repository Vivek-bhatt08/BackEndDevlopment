const fs = require("fs");
const { read } = require("../IO/io");
// fs.readFile("../write/user.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     // console.log(data[0]);
//     let users=JSON.parse(data);
//     console.log(users[0]);
// })

async function readusers(){
    let user=await read("../write/user.txt");
    let user1=await read ("../write/user1.txt");
    console.log(user);
    console.log(user1);
}
readusers();

