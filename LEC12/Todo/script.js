let edit = document.querySelector(".edit");
let del = document.querySelector(".delete");

// console.dir(edit); //object ke form pe console;
/*
parent 
child
siblings

1.nextElementSibling
2.perviousElementSibling 
*/
console.log(edit);
console.log(edit.nextElementSibling);//delete
console.log(edit.nextElementSibling.nextElementSibling)//p tag
console.log(edit.parentElement.previousElementSibling); //h1 
// console.log(del.parentElement.parentElement.parentElement.getAttribute(id));error
let id = del.parentElement.parentElement.getAttribute("id");
console.log(id);
