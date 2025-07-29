let color=["#a93685","#ec4435","#834d4e","#f47d45","#0e2852",
    "#cd3486","#903570","#69337b","#6fd6ba","#154e27","#3fc45b","#7a8c9f"];
let box = document.querySelector("#box");
let btn = document.querySelector("#Generate");
let stop = document.querySelector("#stop");

function generateRandomColor(){
    let index = Math.floor(Math.random()*11);
    let randomColor = color[index];
    box.style.background = randomColor;
    
}
// btn.addEventListener("click",function(){
//     generateRandomColor();
// })
let id;
btn.addEventListener("click",function(){
    id = setInterval(() => {
        generateRandomColor();
    }, 500);
})
stop.addEventListener("click",function(){
    if(id){
        clearInterval(id);
    }
})