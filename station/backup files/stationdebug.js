

var canvas;
var ctx;
var w=1000;
var h=500;


var circle1={
    "x": 100,
    "y": 100,
    "radius": 30,
    "color": "orange",
    "distance": 10,
    "angle": 0,
    "changle":15
}  


setUpCanvas();



animationLoop();

// image(50,h/2,100,100,"./images/rocket.svg");
// image(w/2,50,100,100,"./images/rocket.svg");
// image(w-50,h/2,100,100,"./images/rocket.svg");
// image(w/2,h-50,100,100,"./images/rocket.svg");






function animationLoop(){
    
    clear();
    circle(circle1);
    forward(circle1);
    bounce(circle1);

    requestAnimationFrame(animationLoop);


    
}




function rectangle(x,y,width,height){
    var x;
    var y;
    var width;
    var height;


    ctx.beginPath();



    ctx.rect(x-width/2,y-height/2,width,height);
    ctx.fill();

}


// platforms
function image(x,y,width,height,source){
    var x;
    var y;
    var width;
    var height;
    var source;

    var img=new Image();
        img.src=source;//("./images/rocket.svg")
        img.onload=function(){
            ctx.drawImage(img,x-width/2,y-height/2,width,height);
            //(img, x-coordinate, y-coordinate, width, height)
            //coordinates based on top left corner
        }

}


//circles
function circle(object){   
    ctx.beginPath();
    ctx.arc(object.x,object.y,object.radius,0,2*Math.PI);
    ctx.fillStyle=object.color;
    ctx.fill();
}



//movement
function forward(object,distance){
    var changeX;
    var changeY;
    var oneDegree = 2*Math.PI/360; //angle is in radians, hence have to convert to degrees

    //if the distance in parameter is undefined, use the distance from the object
    if(distance!=undefined){
        distance=object.distance;
    }

    changeX=object.distance*Math.cos(object.angle*oneDegree);
    changeY=object.distance*Math.sin(object.angle*oneDegree);
    object.x = object.x + changeX
    object.y+=changeY
}

function turn(object,angle){
    if(angle!=undefined){
        object.changle=angle;
    };
    object.angle+=object.changle;
}




function clear(){
    ctx.clearRect(0,0,w,h);
}


function bounce(object){
    if(object.x>w||object.x<0){//can choose either one
        // o.angle=180-o.angle;
        turn(object,180-2*object.angle);//make the angle of reflection more realistic
    }
    if(object.y>h||object.y<0){
        //o.angle=360-o.angle
        turn(object,360-2*object.angle);
    }
}




function setUpCanvas(){

    canvas=document.querySelector("#myCanvas");
    ctx=canvas.getContext("2d");
    canvas.width=w;
    canvas.height=h;
    canvas.style.border="5px dotted blue"

}


    

/* 
-draw platforms 
-circles
    -draw (4 different colours)
    -animate
    -bounce 
        -boundaries of the canvas
        -collision
    -disappear when they reach a specific platform
-interactive
    -click to generate a circle
-sound
    -more circles generate - louder station sound

*/

console.log("station");


//SOURCE

//make html canvas full size
//https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

//draw image 
//https://www.rgraph.net/canvas/reference/drawimage.html
//https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas