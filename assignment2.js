

//GLOBAL VARIABLES

var canvas;
var ctx;
var canvasWidth=700;
var canvasHeight=500;


//EXECUTABLE CODE

setUpCanvas();

fillCanvas();

// FUNCTIONS

function fillCanvas(){
    ctx.beginPath();
    ctx.rect(0,0,canvasWidth,canvasHeight);
    ctx.fillStyle="white";
    ctx.fill();
}


function setUpCanvas(){
    canvas=document.querySelector("#gameCanvas");
    ctx=canvas.getContext("2d");
    canvas.width=canvasWidth;
    canvas.height=canvasHeight;
    // canvas.style.border="2px solid white";
}





console.log("hello world");