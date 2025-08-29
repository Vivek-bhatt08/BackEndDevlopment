// signup feature
let signupForm = document.querySelector("#signup-form");
let signupEmail = document.querySelector("#signup-email");
let signupPassword = document.querySelector("#signup-password");
let signupUsername = document.querySelector("#signup-username");

    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        let username = signupUsername.value;
        let email = signupEmail.value;
        let password = signupPassword.value;

        try {
            let response = await fetch("/api/users", {
                method: "POST", 
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let data = await response.json();
            console.log("Signup successful:", data);

        } catch (error) {
            console.error("Error during signup:", error);
        }
    });


//login form
let loginForm = document.querySelector("#login-form");
let loginEmail = document.querySelector("#login-email");
let loginPassword = document.querySelector("#login-password");

loginForm.addEventListener("submit",async(e)=>{
    e.preventDefault();

    let email = loginEmail.value;
    let password = loginPassword.value;

    try {
        let response = await fetch("/api/login", {
            method: "POST", 
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        let data = await response.json();
        if(data.success){
            let token = data.token;
            localStorage.setItem("token",token);
            alert("login success...")
            loginForm.reset();
        }
        
    } catch (error) {
        console.error("Error arha hai ...");
    }
})
