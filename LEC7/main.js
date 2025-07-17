// const fs = require("fs");
//read from file user and user1 and write the both file content to allusers file 
// fs.readFile("write/user.txt", "utf8",function(err,data1){
//     if(err) return console.log(err);
//     let user1=JSON.parse(data1);
//     console.log(user1);
//     fs.readFile("write/user1.txt", "utf8",function(err,data2){
//         if(err) return console.log(err);
//         let user2=JSON.parse(data2);
//         console.log(user2);
//         let alluser=user1.concat(user2);
//         console.log(alluser);
//         fs.writeFile("allusers.txt",JSON.stringify(alluser),(err)=>{
//             if(err){
//                 return console.log(err);
//             }
//             console.log("data written successfully")
//         });
//     });


// });


const { read } = require("./IO/io");
const { write } = require("./IO/io");

async function task(file1,file2,file3) {
    let user1=await read(file1);
    let user2=await read(file2);
    let alluser=user1.concat(user2);
    let message = await write(file3,JSON.stringify(alluser));
    console.log(message);
}
task("write/user.txt","write/user1.txt","allusers.txt");

