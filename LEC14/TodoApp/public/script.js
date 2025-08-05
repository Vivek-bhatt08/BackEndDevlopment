function FetchFunc(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then((data)=>{
        data.forEach(element => {
            addTodo(element);
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}
FetchFunc("http://localhost:3000/todo");


let ulContainer=document.querySelector(".ul-container");



function addTodo(Todo){
    let li=document.createElement("li");
    li.innerHTML=`<div>
                    <h1>${Todo.todo}</h1>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Done</button>
                </div>`
    ulContainer.appendChild(li);
}