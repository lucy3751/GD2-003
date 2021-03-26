(function(){

    window.onload= function(){

        
        (function() {  

            var canvas;
            var ctx;
            var w;
            var h;
            var animationFrame; //variable to hold the requestAnimationFrame from the animation function (in order to stop it)
            var circlesTimeCalled = false;//boolean for the circlesTime function conditionals

      
        

            var allCircles=[];

                        //dark red      orange      green     indigo    cyan       brown    light red   grey
            var allColors=["#981A31", "#F58022", "#038543", "#1A3966", "#049AC7","#79461D","#EE3325","#C9C3BB"];

            
           
           

        //hexcode
            // 1.dark red - #981A31
            // 2.orange - #F58022
            // 3.green - #038543
            // 4.indigo - #1A3966
            // 5.cyan - #049AC7
            // 6.brown - #79461D
            // 7.light red - #EE3325
            // 8.grey - #C9C3BB

       
        



        //cannot put objects that have variables of w and h here since these values are undefine for now  

            canvas = document.querySelector("#myCanvas");
            ctx = canvas.getContext("2d");

            // resize the canvas to fill browser window size
            window.addEventListener("resize", resizeCanvas, false);

            function resizeCanvas() {
                // console.log(circlesTimeCalled);


                    canvas.width = w = window.innerWidth;
                    canvas.height = h = window.innerHeight;
                    canvas.style.border="0px dotted var(--beige)" //this actually takes values from the linked stylesheet!
                
                    //objects for testing
                    var circle1={
                        "x": w/2,
                        "y": 15,
                        "radius": 15,
                        "color": "orange",
                        "distance": 10,
                        "angle": 90,
                        "angleChange":90
                    } 

                    var circle2={
                        "x": w/2,
                        "y": 30,
                        "radius": 10,
                        "color": "blue",
                        "distance": 10,
                        "angle": Math.random()*60,
                        "angleChange":90
                    } 


                    //PLATFORMS
                    var platformDarkRed={
                        // "x": w/2/2,
                        "x": w/12/2,
                        "y": w/12/2,
                        "width": w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#981A31"
                    }
        
                    var platformOrange={
                        "x": w/2,
                        "y": w/12/2,
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#F58022"
                    }
        
                    var platformGreen={
                        // "x": w-(w/2/2),
                        "x": w-(w/12/2),
                        "y": w/12/2,
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#038543"
                    }
        
                    var platformIndigo={
                        "x": w-(w/12/2),
                        "y": h/2,
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#1A3966"
                    }
        
                    var platformCyan={
                        // "x": w-w/2/2,
                        "x": w-(w/12/2),
                        "y": h-(w/12/2),
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#049AC7"
                    }
        
                    var platformBrown={
                        "x": w/2,
                        "y": h-(w/12/2),
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#79461D"
                    }

                    var platformLightRed={
                        // "x": w/2/2,
                        "x": w/12/2,
                        "y": h-(w/12/2),
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#EE3325"
                    }
        
                    var platformGrey={
                        "x": w/12/2,
                        "y": h/2,
                        "width":w/12,
                        "radius":w/12/2,
                        "height": w/12,
                        "color":"#C9C3BB"
        
                    }
        
                    
                   var allPlatforms=[platformDarkRed,platformOrange,platformGreen,platformIndigo,platformCyan,platformBrown,platformLightRed,platformGrey];

                     // console.log(w,h);

                     console.log(platformGreen.color);



/////////// PUT DRAWINGS HERE TO PREVENT FROM GETTING CLEARED WHEN BROWSWER WINDOW RESIES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                     
                    

                
                    //CALLING FUNCTIONS
                    document.querySelector("#myCanvas").onclick=click;                   
                    circlesTime();
                    pauseStartAnimation();
                
                    //circle(circle1);
                    // circle2(w/2,h/2,50,"blue");
                    

                   
                    
                    
                  

                    //FUNCTIONS THAT USES OBJECTS ONLY IN AVILABLE IN THIS SCOPE
                    function animation(){    
                                           
                                             
                        clearCanvas();
                        drawPlatforms();
                        showCurrentTime();
                     

                        // ANIMATION OF THE CIRCLES 
                        for(var i=0;i<allCircles.length;i++){

                            currentX=allCircles[i].x;
                            currentY=allCircles[i].y;
                   
                            circle(allCircles[i]);
                            forward(allCircles[i]);
                         

                            bounce(allCircles[i],Math.random()*45+180);
                            collisionTestArray(allCircles[i],allCircles);
                                       
                      
                            //ANIMATION FOR THE CIRCLES AND PLATFORM 
                            for (var p=0; p<allPlatforms.length && 
                                allCircles[i] !== undefined;p++){ //to prevent the for loop for using the spliced index from allCircles array
                                // console.log("i:",i,"p:",p)
                                // console.log("allCircles:",allCircles);
                                collisionCirclePlatform(allCircles[i],allPlatforms[p]);
                                collision(allCircles[i],allPlatforms[p]);
                            }
 
                        }
    
                        //TEST ANIMATIONS
                        // circle(circle1);
                        // // circle(circle2);
                        // forward(circle1);
                        // // forward(circle2);
                        // bounce(circle1,Math.random()*89);
                        
                        // bounce(circle2,Math.random()*40);
                        // collision(circle1,circle2);
                        
                    
                        animationFrame = requestAnimationFrame(animation);
                        
                    }


                    /*///FUNCTION TO PREVENT SHAPES FROM SPEEDING UP WHEN BROWSWER WINDOW GETS RESIZED
                    when browswer window gets resized, the animation function 
                    gets called again, which causes the shapes to speed up*/
                    function pauseStartAnimation(){
                        window.cancelAnimationFrame(animationFrame);//"pauses" the animation (with the circles' object values (which are changed by the animation) still stored)
                        clearCanvas();//clears the canvas
                        animation();//plays the animation again
                    }


                  
                    ///DRAW THE PLATFORMS
                    function drawPlatforms(){
                        rectangle(platformDarkRed);
                        rectangle(platformOrange);
                        rectangle(platformGreen);
                        rectangle(platformIndigo);
                        rectangle(platformCyan);
                        rectangle(platformBrown);
                        rectangle(platformLightRed);
                        rectangle(platformGrey);
                    }

                    


            }
            resizeCanvas();

          
            


/////////// DRAWING FUNCTIONS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

            


            // /////////// INTERACTIVE FUNCTIONS  ///////////////
            //////////////////////////////////////////////////////


            // CLICK FUNCTION
            function click(event){
                addCircle(allCircles,event.offsetX,event.offsetY);//add a new circle based on the position of the cursor
                
                document.querySelector("#myAudio").play(); //play audio  
                
                audioVolumeIncrease(); 
            }



            ///SHOW CURRENT TIME ON THE CENTER OF THE PAGE
            function showCurrentTime(){
                var t= new Date();
                
                var hours = t.getHours();
                var minutes = t.getMinutes();
                var seconds = t.getSeconds();
         
                //add 0 for single digit numbers
                var hoursString = ("0" + hours). slice(-2); //slice -2 takes the last two digits of the string
                var minutesString = ("0" + minutes). slice(-2);
                var secondsString = ("0" + seconds). slice(-2);


                document.querySelector("#showTime").innerHTML = (hoursString + ":" + minutesString + ":" + secondsString);               
               
            }


           

            //NUMBER OF INITIAL CIRCLES BASED ON THE CURRENT TIME
            function circlesTime(){

            if (circlesTimeCalled == false){  //to prevent the function getting called when resizing the browser window  
                var date = new Date();
                var time = date.getHours();

                if( time>=7 && time <= 22){//if time is in the 7-22 range
              
                // console.log("current time:", time);

                    if( time>=7 && time<=10 || time>=17 && time<=18){   // -7-10am rush hour, // -5-6pm rush hour
                        
                        for(var i=0;i<40;i++){
                            addCircle(allCircles,Math.floor(Math.random()*w),Math.floor(Math.random()*h));
                        }
                        
                        console.log ("rush hour");
                        
                    }else if(time>=11 && time<=13){ // -11-1pm lunch
                    
                        for(var i=0;i<20;i++){
                            addCircle(allCircles,Math.floor(Math.random()*w),Math.floor(Math.random()*h));
                        }

                        console.log("lunch");

                    }else if( 14<=time<=16 || 19<=time<=22){  // -2-4pm silent, // -7-10pm silent?
                        
                        for(var i=0;i<5;i++){
                            addCircle(allCircles,Math.floor(Math.random()*w),Math.floor(Math.random()*h));
                        }
                        
                        console.log("silent");

                    }

                }
                circlesTimeCalled = true;
            }
        }







            ///AUDIO VOLUME BASED ON THE NUMBER OF CIRCLES
            function audioVolumeIncrease(){
                var sound = document.querySelector("#myAudio");
               
                //volume takes in value from 0-1 (percentages)
                sound.volume = 0; //start audio at silence
                
                if(allCircles.length<10){
                    sound.volume= 0;
                }else if (allCircles.length<20){
                    sound.volume= 0.2;
                }else if (allCircles.length<30){
                    sound.volume= 0.5;
                }else{
                    sound.volume=1;
                }              

                console.log("audio is playing at " + sound.volume + " volume");

            }



         
            

            // /////////// GENERATE SHAPE FUNCTIONS  ///////////////
            //////////////////////////////////////////////////////
            function addCircle(array,x,y){
                array.push({
                    "x": x,
                    "y": y,
                    "radius": Math.random()*5+5,
                    // "radius": 50,
                    "color": allColors[Math.floor(Math.random()*8)],
                    // "color": allColors[10],
                    "distance": Math.random()*10+2,
                    "angle": Math.random()*180,
                    // "angle": 180,
                    "angleChange":90
                })
                // console.log(allCircles.length);
            }
            

           
            


            // /////////// DRAWING FUNCTIONS  ///////////////
            /////////////////////////////////////////////////
        

             //CLEAR CANVAS FOR ANIMATION
             function clearCanvas(){
                ctx.clearRect(0,0,w,h);
            }


            //CIRCLE (USING JS OBJECT)
            function circle(object){   
                ctx.beginPath();
                ctx.arc(object.x,object.y,object.radius,0,2*Math.PI);
                ctx.fillStyle=object.color;
                ctx.fill();
                // console.log("HELLOOOO2:",object.color);
            }


            //RECTANGLE (USING JS OBJECT)
            function rectangle(object){
            ctx.beginPath();
            ctx.rect(object.x-object.width/2,object.y-object.height/2,object.width,object.height);
            ctx.fillStyle=object.color;
            ctx.fill();
            }

                    
           
            //CIRCLE (TESTING)
            function circle2(x,y,r,color){   
                ctx.beginPath();
                ctx.arc(x,y,r,0,2*Math.PI);
                ctx.fillStyle=color;
                ctx.fill();
            }

            //RECTANGLE (TESTING)
            function rectangle2(x,y,width,height){
                var x;
                var y;
                var width;
                var height;
            ctx.beginPath();
            ctx.rect(x-width/2,y-height/2,width,height);
            ctx.fill();
            
            }

            
           
           




            // /////////// SHAPE MOVEMENT FUNCTIONS ///////////////
            /////////////////////////////////////////////////


            /*MOVE FORWARD POSITION - take the current x/y-position of the object, 
            add the value of "newDistance" or "object.distance" 
            multiplied by the angle of the object(where it's facing) to get 
            the new x/y-position*/
            function forward(object,newDistance){
                var changeX;
                var changeY;

                var oneDegree = 2*Math.PI/360; //angle is in radians, hence have to convert to degrees

                //if the distance in parameter is undefined, use the distance from the object
                if(newDistance!=undefined){
                    newDistance=object.distance;
                }

                changeX=object.distance*Math.cos(object.angle*oneDegree);
                changeY=object.distance*Math.sin(object.angle*oneDegree);
               
                object.x = object.x + changeX
                object.y+=changeY
               
            }


            /*TURNING - take the current angle of the object, 
            and add the value of "newAngle" or "object.angleChange"*/
            function turn(object,newAngle){
                if(newAngle!=undefined){//if new angle is defined, the object's angle will add that defined angle value
                    object.angleChange=newAngle;
                }

                object.angle+=object.angleChange;
        
            }






            // /////////// COLLISION FUNCTIONS ///////////////
            /////////////////////////////////////////////////


            /*BOUNCE - when the object hits the boundary of the canvas, 
            it rotates 180*some random number degrees*/
            function bounce(object,randomAngle){
                if(randomAngle==undefined){//if randomAngle is not defined, the object will turn 180 degrees once it hits the boundary
                    if(object.x>w-object.radius || object.x<0+object.radius){
                        // turn(object,180);
                        turn(object,randomAngle);
                    }
                    
                    if(object.y>h-object.radius || object.y<0+object.radius){
                        // turn(object,180);
                        turn(object,randomAngle);
                    } 
                }else{
                    if(object.x>w-object.radius || object.x<0+object.radius){
                        turn(object,randomAngle);
                    }
                    // console.log(object.angle);
                    
                    if(object.y>h-object.radius || object.y<0+object.radius){
                        turn(object,randomAngle);
                    }
                }
                 
            }



            /* TESTING THE COLLISION OF THE CIRCLES IN THE ARRAY 
                if the specific circle does not equal to all the circles in the array, then there is collision b/w them */
            function collisionTestArray(object,array){
                for (var i=0;i<array.length;i++){
                    if (object !=array[i]){
                        collision(object,array[i]);
                    }
            
                }
            }

            


                     
              
            /*COLLISION B/W TWO OBJECTS - 
            */
           function collision (object1, object2){
               if(object1 && object2){//execute the code only if both object 1 and 2 exist

                    
                   if(object1.x+object1.radius >= object2.x-object2.radius &&//under these conditions
                        object2.x+object2.radius >= object1.x-object1.radius &&
                        object1.y+object1.radius >= object2.y-object2.radius &&
                        object2.y+object2.radius >= object1.y-object1.radius){
                            
                            var differenceX=Math.abs(object1.x-object2.x);
                            var differenceY=Math.abs(object1.y-object2.y);
                            if(differenceX < differenceY){
                                // turn(object1,180);
                                // turn(object2,180);
                                turn(object1, Math.random()+180);
                                turn(object2, Math.random()+180);
                                
                            }else{
                                // turn(object1,180);
                                // turn(object2,180);
                                turn(object1, Math.random()+180);
                                turn(object2, Math.random()+180);
                           }
                        }
                }
            }



              /*COLLISION STATION AND THEIR COLORED CIRCLES - once the collision is detected, 
              if the circle has the same color as the platform it hit, the circle gets removed
            */
            function collisionCirclePlatform(circle,platform){
                // console.log(circle);                  
                if(circle.color == platform.color){
                    if(circle.x+circle.radius >= platform.x-platform.radius &&//under these conditions
                        platform.x+platform.radius >= circle.x-circle.radius &&
                        circle.y+circle.radius >= platform.y-platform.radius &&
                        platform.y+platform.radius >= circle.y-circle.radius){
                            
                            var differenceX=Math.abs(circle.x-platform.x);
                            var differenceY=Math.abs(circle.y-platform.y);
                            var indexCircle=0;
                            if(differenceX < differenceY){
                                indexCircle=allCircles.indexOf(circle);
                                allCircles.splice(indexCircle,1);//removes circle from its array
 
                            }else{
                                indexCircle=allCircles.indexOf(circle);
                                allCircles.splice(indexCircle,1);
                            }
                        }
                }
            }
        
  
        })();





    }//window.onload ending


})();





console.log("station");


//////////// SOURCE //////////////////////

//make html canvas full size
//https://stackoverflow.com/questions/4288253/html5-canvas-100-width-height-of-viewport

//draw image 
//https://www.rgraph.net/canvas/reference/drawimage.html
//https://stackoverflow.com/questions/6011378/how-to-add-image-to-canvas

//change volume of html audio
//https://www.w3schools.com/tags/av_prop_volume.asp

//get the current time
//https://stackoverflow.com/questions/10599148/how-do-i-get-the-current-time-only-in-javascript
//https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss/18229149
//https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date