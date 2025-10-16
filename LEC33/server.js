const express = require("express");
const app=express();
const { createClient }= require("redis");
const client = createClient()
async function connect(){
  
    await client.connect()
    client.on("error",function(err){
        console.log(err);
    })
}
connect()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server is running on port 3000")
    })
})

async function cachedData(){
    if (!client.isOpen) {
        await client.connect()
    }
    await client.set("user:100",JSON.stringify([{
        name:"vivek",
        age:"20"
    }]))
}
cachedData()
.then(()=>{
    console.log("data cached successfully")
    return readUser()
})
.then((data)=>{
    console.log(JSON.parse(data))
})

async function readUser(){
    if (!client.isOpen) {
        await client.connect()
    }
    let user=await client.get("user:100")
    return user
}