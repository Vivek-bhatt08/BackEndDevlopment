//only for the understanding purpose ....

const { response } = require("express");

fetch("http://localhost:3000/todos")
.then((response)=> response.json())//it is not human readable so we have to convert it ....
.then((data)=> console.log(data))