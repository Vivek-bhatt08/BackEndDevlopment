const fs = require("fs");
console.log(fs);
console.log("start");//1



setImmediate(()=>{
    console.log("SetImmediate 1");//6
});
setTimeout(()=>{
    console.log("setTimeout 1");//5
},0);                               //callback:jo fun dusre func me call karega

fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log("file read");
    console.log(data);
    setTimeout(()=>{
        console.log("setTimeout in callback 2");
    })
    setImmediate(()=>{
        console.log("setImmediate in callback 2");
    })
})



function someTask(){
    return new Promise((resolve,reject)=>{
        resolve("promise"); //4
    })
}
someTask().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
process.nextTick(()=>{
    console.log("nextTick"); //3
})


console.log("end");//2