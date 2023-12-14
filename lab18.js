var squaresNumber=6;
var colors = generateRandomColors(squaresNumber);

// [ //there is a space in second and third colors
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
// ]

var squares=document.querySelectorAll(".square");
var pickedcolor= pickColor() //colors[3];  
var pickedcolordisplay=document.querySelector("#pickedcolor");
var messageDisplay=document.querySelector("#message")
var h1display=document.querySelector("h1")
var resetbtn=document.querySelector("#reset")
var easyBtn=document.querySelector("#easy")
var hardBtn=document.querySelector("#hard")

for(var i=0;i<squares.length;i++)
{
    
    squares[i].style.background = colors[i]
      //console.log(squares[i].style.background = colors[i]);
      ///
      squares[i].addEventListener("click",function(){
         //we clicked on this
         var clickedColor =this.style.background
       
         if(clickedColor===pickedcolor)
         {
           
            messageDisplay.textContent="Correct"
            h1display.style.backgroundColor=pickedcolor
            changeColor(pickedcolor)
            resetbtn.textContent="Play Again?"
         }
         else {
            //alert("wrong")
            this.style.background="rgb(128, 128, 128)"
            messageDisplay.textContent="Try Again"
         }
    })
}
pickedcolordisplay.textContent=pickedcolor;


resetbtn.addEventListener('click', function(){
    this.textContent="New Colors"
    colors = generateRandomColors(squaresNumber);
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i]//change squares color
        pickedcolor= pickColor()
        pickedcolordisplay.textContent=pickedcolor;
        h1display.style.backgroundColor= "steelblue" //"rgb(128, 128, 128)"
    }
    messageDisplay.textContent=""
})


easyBtn.addEventListener('click',function(){
    squaresNumber=3;
    easyBtn.classList.add('selected')
    hardBtn.classList.remove('selected')
  
    colors = generateRandomColors(squaresNumber);
    pickedcolor= pickColor()
    pickedcolordisplay.textContent=pickedcolor;
    for (var i=0;i<=squares.length;i++)
    {
        if (colors[i]){//color is not found so make it none
            squares[i].style.background=colors[i];
        }
        else { squares[i].style.display="none"}
    }

})

hardBtn.addEventListener('click',function(){
    squaresNumber=6;
    hardBtn.classList.add('selected')
    easyBtn.classList.remove('selected')
    colors = generateRandomColors(6);
    pickedcolor= pickColor()
    pickedcolordisplay.textContent=pickedcolor;

    colors = generateRandomColors(squaresNumber);
    pickedcolor= pickColor()
    pickedcolordisplay.textContent=pickedcolor;
    for (var i=0;i<=squares.length;i++)
    {       squares[i].style.background=colors[i];
            squares[i].style.display ="block";
    }
 
})


function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }

}
function pickColor(){
   var random= Math.floor(Math.random()*colors.length);//1-5
   return colors[random];//random in array
}

function generateRandomColors(num){
    //console.log("generateRandomColors "+num)
    var arr=[];
    for (var i=0;i<num;i++)
    {
      
        //console.log(ranColor())
        arr.push(ranColor())
        //arr[i]=randomcolor()
    }
  
    return arr;
}

function ranColor()
{
    
   var r= Math.floor(Math.random() * 256);
   var g= Math.floor(Math.random() * 256);
   var b= Math.floor(Math.random() * 256);
   //console.log("rgb("+r+", "+g+", "+b+")");
   return  "rgb("+r+", "+g+", "+b+")" ;
}
