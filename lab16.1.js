//var the dynamic components
var p1display= document.querySelector('.p1display');
var p2display= document.querySelector('.p2display');
var getinput=document.querySelector('input')
var textdisplay= document.querySelector('.threasholddisplay');
var btnp1= document.querySelector('.p1btn');
var btnp2= document.querySelector('.p2btn');
var btnreset= document.querySelector('.resetbtn');
var p1btn_counter=0;
var p2btn_counter=0;
var final_score=0;
var gameover=false; //to stop both btns

function reset()
{
    p1btn_counter=0;p2btn_counter=0; gameover=false;
    p1display.textContent=0;
    p2display.textContent=0;
    p1display.classList.remove('winnergoal');
    p2display.classList.remove('winnergoal');
}

btnp1.addEventListener("click",function(){
    if (!gameover){
        p1btn_counter++;
        if (p1btn_counter===final_score){
        gameover=true;
        p1display.classList.add('winnergoal'); }
        p1display.textContent=p1btn_counter;
    }

 
})

btnp2.addEventListener("click",function(){
    if (!gameover){
        p2btn_counter++;
        if (p2btn_counter===final_score){
        gameover=true;
        p2display.classList.add('winnergoal'); }
        p2display.textContent=p2btn_counter;
    }
  
})



btnreset.addEventListener("click",function(){
reset();

})

// h1reset.textContent=getInput.value; 
getinput.addEventListener("change",function(){
    console.log(getinput.value)
    // textdisplay.textContent=Number(input.value);
    textdisplay.textContent=getinput.value; 
    final_score=Number(getinput.value)
    reset();
})
