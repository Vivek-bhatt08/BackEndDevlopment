const jwt = require("jsonwebtoken");

function isLogin(req,res,next){
    let token = req.headers.authorization;
    let decode = jwt.verify(token,"okkk")
    console.log(decode);
    if(decode){
        req.email = decode.user.email;
        return next();
    }
    res.json({
        success:false,
        message:"please login"
    })
}
module.exports.isLogin = isLogin;