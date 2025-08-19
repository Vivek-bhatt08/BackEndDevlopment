const express = require("express");
const router = express.Router();
let {postAddUser,getAllUser,getUserById}=require("../controller/userController")

//create
router.post("/",postAddUser);
//create
router.get("/",getAllUser);

router.get("/:id",getUserById);


module.exports=router;