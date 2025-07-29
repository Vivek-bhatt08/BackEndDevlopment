//hwo to insert new element in dom 
//1.create a new element  ---> cerate eelemtnt
//2.add required data in that element using innerText or innterHTMl 
//3.add that element in parent container (using appendChild or append);

let todo ={
    id:355135,
    title:"ToDo4"
}

let ul = document.querySelector(".UList");
function addTodo(todo){
    let li = document.createElement("li");
    // li.setAttribute("id",${todo.id});//error
    li.setAttribute("id",`${todo.id}`);//todo me id dere hai ek 
    li.innerHTML=`<div>
                    <input type="checkbox" name="" id="checkbox">
                    <h1>${todo.title}</h1>
                    <div>
                        <button class="edit">✏️</button>
                        <button class="delete">⚔️</button>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                </div>`
    ul.appendChild(li);
}
addTodo(todo)