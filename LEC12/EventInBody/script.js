let body = document.querySelector("body");
body.addEventListener("click",function(ev){// (func,callback)kuch krane ke baad kuch krana is callback 
    // console.log(ev);
    // console.log(ev.target);
    console.log(ev.target.innerText);
})