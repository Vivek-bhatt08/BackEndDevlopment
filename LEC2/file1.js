let file3=require("./file3")
let res=file3.add(5,6)
console.log(res)
function sub(a,b)
{
    return a-b;
}
module.exports.sub=sub;