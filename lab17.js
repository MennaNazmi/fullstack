var listvar=document.querySelector("#names")
var b=document.querySelector("button")
listvar.addEventListener("mouseover",function(){
    //   document.body.classList.add("changecolorclass")
    document.body.style.color="green"
})

listvar.addEventListener("mouseout",function(){
    // document.body.classList.remove("changecolorclass")
    document.body.style.color="black"
})


b.addEventListener("mouseenter",function(){
   b.style.visibility="hidden"
})

b.addEventListener("mouseleave ",function(){
    // document.body.classList.remove("changecolorclass")
    // document.body.style.color="black"
    b.style.visibility="visible"
   
})
