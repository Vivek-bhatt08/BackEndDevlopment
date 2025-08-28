const express = require("express");
const router = express.Router();
const {isLogin} = require("../middleware/middleware")
const {postAddBlog, getFetchBlog, deleteBlogById} = require("../controller/blogController");


router.post("/",isLogin,postAddBlog);

router.get("/fetchblogs",getFetchBlog);

router.delete("/:blodId",deleteBlogById);


module.exports = router;