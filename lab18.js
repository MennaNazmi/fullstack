var colors = generateRandomColors(6);



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
    colors = generateRandomColors(6);
    for(var i=0;i<squares.length;i++){
        squares[i].style.background = colors[i]//change squares color
        pickedcolor= pickColor()
        pickedcolordisplay.textContent=pickedcolor;
        h1display.style.backgroundColor="rgb(128, 128, 128)"
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
