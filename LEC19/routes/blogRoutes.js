const express = require("express");
const router = express.Router();//app ka subset
let {postAddBlog,getBlogById,getFetchAllBlogs,deleteBlogById} = require("../controller/blogController")

//create
router.post("/",postAddBlog)//post request to add blog


router.get("/",getFetchAllBlogs) // get all blogs

router.get("/:id",getBlogById) // get blog by id

router.delete("/:blogId",deleteBlogById)//delete blog by id





module.exports = router;