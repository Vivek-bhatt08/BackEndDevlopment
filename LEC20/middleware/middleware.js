const { log } = require("node:console");
const { fileURLToPath } = require("node:url");

function m1(req,res,next){
    console.log("running middleware 1");
    req.user={
        id:1,
        username:"vivek"
    }
    next();
}
function m2(req,res,next) {
    console.log("running middleware 2");
    console.log(req.user);
    // req.isAdmin = true;

    next();
}
function checkAdmin(req,res,next){
    let {name}=req.query;
    if(name=="Vivek"){
        req.isAdmin = true;
        // next(); isme function whi pe nhi rukega so we have to return 
        return next();
    }
    res.json({
        success:false,
        message:"you are not an admin"
    })
}
function isLogin(req,res,next) {
    console.log("running middleware IsLogin");
    next();
}



module.exports.m1=m1;
module.exports.m2=m2;
module.exports.checkAdmin = checkAdmin;
module.exports.isLogin = isLogin;