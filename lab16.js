// var p1Button=document.getElementById("p1");
var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var p3reset=document.querySelector("#reset");
var p1Display=document.querySelector("#p1Display"); 
var p2Display=document.querySelector("#p2Display");
var p1Score=0;
var p2Score=0;

var getInput=document.querySelector("input");
var h1reset=document.querySelector("p span");
var gameover=false;
var winningScore=0;

p1Button.addEventListener("click",function(){
    if (!gameover){
    p1Score++; 
     if(p1Score===winningScore){
     console.log(p1Score);
     p1Display.classList.add("winner")  
     gameover=true;}} 
     p1Display.textContent=p1Score;
    
})

p2Button.addEventListener("click",function(){
    if(!gameover){
        p2Score++;
        if (p2Score===winningScore){
            gameover=true;
            p2Display.classList.add("winner")     
        }
        p2Display.textContent=p2Score;
    }
 
})

p3reset.addEventListener("click",function(){

    reset();
})


function reset(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameover=false;
}
getInput.addEventListener("change",function(){
     h1reset.textContent=getInput.value; 
     winningScore=Number( getInput.value);
     reset();
    })