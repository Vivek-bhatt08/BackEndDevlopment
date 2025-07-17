const fs = require("fs");
function read(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf-8",function(err,data){
            if(err) return reject(err);
            resolve(data);
        });
    });

}
function write(file,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(file,data,function(err){
            if(err){
                return reject(err);
            }
            resolve("data write hogya hai ...")
        })
    })
}
module.exports.read=read;
module.exports.write=write;