let todoform = document.querySelector("#todo-form");
let todoInput = document.querySelector("#todo-input");
let submitBtn = document.querySelector("#submitBtn");
let todoContainer = document.querySelector(".todo-container");

let toDoArray=[];
fetch("http://localhost:3000/todos")
.then((response)=> response.json())//it is not human readable so we have to convert it ....
.then((data)=>{
    toDoArray=data;
    showAllTodos(toDoArray);
})


todoform.addEventListener("submit", function(e){
    e.preventDefault();
    let todoText = inputValue();
    let newTodo = {
        id: Math.floor(Math.random() * 10000), // ✅ FIXED
        title: todoText
    }
    toDoArray.push(newTodo);
    // addTodo(newTodo);
    showAllTodos(toDoArray);
    todoInput.value = "";
})

function inputValue(){
    return todoInput.value;
}

function addTodo(todo){
    let li = document.createElement("li");
    li.setAttribute("id", `${todo.id}`);
    li.innerHTML = `
        <div style="display:flex;">
            <input type="checkbox" name="" id="checkbox">
            <h1 style="padding-right:50px">${todo.title}</h1>
            <div style="padding-top:30px">
                <button class="edit">✏️</button>
                <button class="delete">⚔️</button>
            </div>
        </div>`;
    todoContainer.appendChild(li);
}

function showAllTodos(toDoArray){
    todoContainer.innerHTML = "";
    toDoArray.forEach(function(todo){
        addTodo(todo);
    })
}
