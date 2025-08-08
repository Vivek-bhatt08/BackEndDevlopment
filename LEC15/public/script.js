let signup = document.querySelector("#signup");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

function addUser(email,password){
    let newUser = {
        email:email,
        password:password
    }
    fetch("/adduser",{//agr same jagah pe server nhi hota toh pura path dena hota hai 
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "content-type":"application/json"
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        if(data.success){
            alert(data.message)
            signup.reset();
        }
        else{
            alert(data.error);
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}
signup.addEventListener("submit", function(e){
    e.preventDefault();
    addUser(email.value,password.value);
})