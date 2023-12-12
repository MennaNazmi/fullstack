var button = document.querySelector("button");
var isPurple=false;
// document.querySelector("body");
// document.getElementsByTagName("button")[0]

// button.addEventListener("click",function(){
//     if(isPurple){
//     // alert("connected")
//     document.body.style.background="white";
//     // isPurple=false;
// }
//     else {
//         document.body.style.background="purple";
//         // isPurple=true;
//     }
//     isPurple=!isPurple;
// })

// -----------

//queryselectorvariable.body.classlist.toggle(classnameinhtml)
button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
})