const Blog = require("../model/blog");
const USER = require("../model/user");

module.exports.postAddBlog = async (req,res)=>{
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.userId;

    let getUser = await USER.findById(userId);
    if(!getUser){
        return res.json({
            success:false,
            message:"User not found"
        })
    }
    
    let blog = {
        title:title,
        body:body,
        date:Date.now(),
        userId:userId
    }
    let newBlog =  new Blog(blog);





    
    getUser.blogs.push(newBlog._id); //getuser jo banaya hai . blogs jo array hai  . method to push in array
    await getUser.save();





    
    await newBlog.save();//data add in mongoose using save method this is and IO operation
    //await is used in all function of db

    res.json({
        success:true,
        message:"blog added successfully",
        data:newBlog
    })


}

module.exports.getFetchBlog = async(req,res)=>{ //fetch data using find method
    let allBlogs = await Blog.find();
    res.json({
        success:true,
        message:"all blogs fetch successffully",
        data:allBlogs
    })
}

module.exports.deleteBlogById = async(req,res)=>{
    let blogId = req.params.blogId;
    let userId = req.body.userId;

    let blogExist = await Blogs.findById(blogId);
    if(!blogExist){
        return res.json({
            success:false,
            message:"blog not found"
        })
    }
    if(blogExist.userId!=userId){
        return res.json({
            success:false,
            message:"you are not the owner of this blog"
        })
    }
    await Blog.findByIdAndDelete(blogId);
    //homework ki user ko update bhi krna hai ...
}