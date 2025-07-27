// dom
// by id
let res=document.getElementById("mydiv")// element milta hai return mai
// console.dir(res)
console.log(res)
//by classname
let temp=document.getElementsByClassName("start") //list milta hai return mai
// console.dir(temp)
console.log(temp)
console.log(temp[0])

//tag name
let res2=document.getElementsByTagName("p")
console.log(res2)
//all in one
let out=document.querySelector("#mydiv")
console.log(out)
//nodelist
console.log(document.querySelectorAll("p"))

console.log(res.innerHTML)//getter
// res.innerHTML=`<p> Lorem Posem</p>`//setter
//inner text
console.log(res.innerText)//getter
// res.innerText=`hello world`//setter

//textContent

//getAttribute
console.log(res.getAttribute("id"))
// res.setAttribute("class","usingjs")

let btn=document.querySelector(".btn")
let change=document.querySelector("#mydiv")
btn.addEventListener("click",()=>{
    change.setAttribute("class","js")
})
// classlist
let myH=document.querySelector(".myh")

console.log(myH.classList)

myH.classList.add("hi")
myH.classList.remove("myh")
// btn.addEventListener("click",()=>{

//     myH.classList.toggle("jaiho")
// })

let selectBtn=document.querySelector(".cross")

let form =document.querySelector(".signup")

selectBtn.addEventListener("click",()=>{
     form.classList.add("hide")
})
btn.addEventListener("click",()=>{
    form.classList.remove("hide")
})

   





