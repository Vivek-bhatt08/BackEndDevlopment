// function getCommentData(){
//     //send url in this jha request bhejni hai 
//     //fetch ko third party se asani se kaise kre 
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//         console.log(res.data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }
// getCommentData();


//using async await 
async function getCommentDataAsync(){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
        console.log(response.data);
    }
    catch(err){
            console.log(err);
    }
}
getCommentDataAsync();

function adduser(email,password){
    axios.post("/users",{
        email:email,
        password:password
    })
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
                
}
adduser("vivek@gmail","1234");