var number13=0;
var number93=0;

var counting13Executed=false;
var counting93Executed=false;
var onNavbar=false;



window.onload= everything();




function everything(){

 


//////////////////////////// FUNCTION CALLS  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

    //scroll function call
    $(document).scroll(function(){

        // console.log("scrolling");
        allScrollInteractions();
        numberAnimation();
        textFadeAnimation();
           

    //    scrollInteraction2();
    //    scrollInteraction3();
    //    scrollInteraction4();

    // console.log("scrollTop:", $(document).scrollTop());
    // console.log("section2A from top",$("#section2A").offset().top);
    })





    //hover function call
    $(".navbar").hover(function(){

       //when cursor hovers the navbar
       onNavbar=true;
    //    console.log(onNavbar);
       
       //all dots come back
       hoverInteraction("#section1Dot");
       hoverInteraction("#section2Dot");
       hoverInteraction("#section3Dot");
       hoverInteraction("#section4Dot");
       hoverInteraction("#section5Dot");
       hoverInteraction("#section6Dot");
       hoverInteraction("#section7Dot");
       hoverInteraction("#section8Dot");
       hoverInteraction("#section9Dot");
       hoverInteraction("#section10Dot");
       hoverInteraction("#section11Dot");
       hoverInteraction("#section12Dot");


        }, function(){//when the mouse leaves the navbar
        
        onNavbar=false;
        // console.log(onNavbar);
        allScrollInteractions();
      });






//////////////////////////// FUNCTIONS  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   ////////////////////// INTERACTIONS ON NAV BAR ////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

    ///dots interaction when cursor hovers on the navbar
    function hoverInteraction(currentSectionDot){

        $(currentSectionDot).css({ "opacity": "1",//hovering the navbar
        "color": "var(--white)"});


            $(currentSectionDot).hover(function(){//hovering the section dots

                $(this).css("color", "cyan");
            },function(){

                $(this).css("color","var(--white)");
            });

    }  

  

    //function to nest the function calls
    function allScrollInteractions(){
                                        //current
        scrollInteraction("#section1","#section2","#section3","#section2Dot","#section1Dot",1);  
        scrollInteraction("#section2","#section3","#section4","#section3Dot","#section2Dot",2);
        scrollInteraction("#section3","#section4","#section5","#section4Dot","#section3Dot",3);
        scrollInteraction("#section4","#section5","#section6","#section5Dot","#section4Dot",4);
        scrollInteraction("#section5","#section6","#section7","#section6Dot","#section5Dot",5);
        scrollInteraction("#section6","#section7","#section8","#section7Dot","#section6Dot",6);
        scrollInteraction("#section7","#section8","#section9","#section8Dot","#section7Dot",7);
        scrollInteraction("#section8","#section9","#section10","#section9Dot","#section8Dot",8);
        scrollInteraction("#section9","#section10","#section11","#section10Dot","#section9Dot",9);
        scrollInteraction("#section10","#section11","#section12","#section11Dot","#section10Dot",10);
        scrollInteraction("#section11","#section12","#section13","#section12Dot","#section11Dot",11);


    }       


    //scroll interaction on the nav bar
    function scrollInteraction(previousSection, currentSection, nextSection, currentSectionDot, previousSectionDot, previousSectionDotsAmount){

        
        var scrolledFromTop = $(document).scrollTop();

        if(scrolledFromTop > $(currentSection).offset().top - ($(window).height()/4) &&
            scrolledFromTop < $(nextSection).offset().top - $(window).height()/4){//scroll down from that section

            // console.log("you have reached",currentSection);

            $(currentSectionDot).css("color","cyan");//change to cyan when scrolled to that section
            disappearDotsBefore(previousSectionDotsAmount);//get rid of all the dots above current dot
        
            // $(previousSectionDot).css("opacity","0");//previous section dot disappear - does not get rid of all the dots above

        

        }else if(scrolledFromTop < $(currentSection).offset().top - ($(window).height()/4) &&
                    scrolledFromTop > $(previousSection).offset().top - $(window).height()/4){//scroll up from that section


            $(currentSectionDot).css("color","var(--white)");//change back to white when scrolled above that section
            
            $(previousSectionDot).css({//change previous section dot back to cyan
                                "color": "cyan",
                                "opacity": "1" 

                                        })
        }
        
    }

  
    //make the dots before the current dot disappear
    function disappearDotsBefore(previousSectionsAmount){

        if(onNavbar==false){

            for (var i=1; i<=previousSectionsAmount;i++){

                $("#section"+i+"Dot").css("opacity","0");
            }

        }else{

            for (var i=1; i<=previousSectionsAmount;i++){

                $("#section"+i+"Dot").css("color","var(--white)");
            }

        }
    }








    
   ////////////////////// TEXT INTERACTIONS  ////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////


    //text fade animation in section 11
    function textFadeAnimation(){

        var scrolledFromTop = $(document).scrollTop();

        if(scrolledFromTop > $("#section11p3-language").offset().top - $(window).height()/4){

                $("#section11p3-language").addClass("active");
                $("#section11p3-rituals").addClass("active");
                $("#section11p3-traditions").addClass("active");
        }
        
        if (scrolledFromTop < $("#section11p3-language").offset().top - $(window).height()/4){

                $("#section11p3-language").removeClass("active");
                $("#section11p3-rituals").removeClass("active");
                $("#section11p3-traditions").removeClass("active");
        }    
    }



    //number count animation in section 2
    function numberAnimation(){

        var scrolledFromTop = $(document).scrollTop();

        if(
            scrolledFromTop > $("#section2number1").offset().top - $(window).height()/4 &&
            scrolledFromTop < $("#section2number2").offset().top - $(window).height()/4
            ){

                counting93();
                console.log("first number animation");
            }
        
        if(
            scrolledFromTop > $("#section2number2").offset().top - $(window).height()/4 &&
            scrolledFromTop < $("#section2p1").offset().top - $(window).height()/2
            ){

                counting13();
                console.log("second number animation");
            }



    }


    // number count for 13.8 
    function counting13(){

        if(counting13Executed==false){
            count1();

            function count1(){
                if(number13 <13.7){
                    number13+=0.1;

                    numberRounded= Math.round(number13*10)/10;
                    console.log(numberRounded);
                    document.querySelector("#numberCounter2").innerHTML=numberRounded;
                    requestAnimationFrame(count1);
                }
                counting13Executed=true;
                console.log("counting13",counting13Executed);  
            }
            
        }
    }

    // number count for 93
    function counting93(){

        if(counting93Executed==false){
            count2();

            function count2(){

                if(number93 <93){
                    number93+=1;

                    numberRounded= Math.round(number93*10)/10;
                    // console.log(numberRounded);
                    document.querySelector("#numberCounter1").innerHTML=number93;
                    requestAnimationFrame(count2);

                }
            }  
            counting93Executed=true;
            console.log("counting93",counting93Executed);
        }
    }





}

//////////////////////////// REFERENCES ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //add a css property to a specific class
// // https://www.w3schools.com/jquery/jquery_css.asp


// //remove a html element
// //https://api.jquery.com/remove/


//round numbers to nearest 1 decimal place
//https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript











//////////////////////////// NOTES ABOUT SCROLL FUNCTIONS  ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //scrollTop - how far we scrolled from the top of the document

    /*we can only scroll to the point where the last bit of the page hits the top window, 
    hence leaving the bottom part not "scrolled". That last bottom part has the height of
    the window. So if we want to scroll the "whole" page,
    we have to subtract the height of the document from the height of the window
    */

    //$(document).height(); - height of the document 
    //$(window).height(); - height of the window
    //$("element").offset().top - how far the element is from the top of the screen


    //.html() - logs it in the html document










//////////////////////////// UNUSED FUNCTIONS ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//OPEN THE NAVBAR TO REVEAL CITATIONS/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// $("#clickArea").click(function(){
    
//     console.log("click");

//     if ($(".navbar").hasClass("active")){//if the menu is open, close the menu (by removing the active class)
       
//         $(".navbar").removeClass("active")

//     }else{//OPEN THE MENU
//         $(".navbar").addClass("active")
//     }
// })






//SCROLL INTERACTION OLD FUNCTIONS //////////////
/////////////////////////////////////////////////////

 // function scrollInteractionOld(element,currentSectionDot,previousSectionDot,nextElement){
                
    //     var scrolledFromTop = $(document).scrollTop();

    //     if(scrolledFromTop > $(element).offset().top - ($(window).height()/4) &&
    //         scrolledFromTop < $(nextElement).offset().top - $(window).height()/4){//scroll down from that section

    //         console.log("you have reached",element )

    //         $(currentSectionDot).css("color","cyan");//change to cyan when scrolled to that section

    //         $(previousSectionDot).css("opacity","0");//previous section dot disappear

    //     }else if(scrolledFromTop < $(element).offset().top - ($(window).height()/4)){//scroll up from that section


    //         $(currentSectionDot).css("color","var(--white)");//change back to white when scrolled above that section
            
    //         $(previousSectionDot).css({//change previous section dot back to cyan
    //                             "color": "cyan",
    //                             "opacity": "1" 

    //                                     })
    //         // $(previousSectionDot).css("color","cyan");
    //         // $(previousSectionDot).css("opacity","1");
    //     }
    // }

    // function scrollInteraction2(){

    //     var scrolledFromTop = $(document).scrollTop();

    //     if(scrolledFromTop > $("#section2A").offset().top - ($(window).height()/4) &&
    //         scrolledFromTop < $("#section3").offset().top - $(window).height()/4){//scroll down from that section

    //         console.log("you have reached","#section2A" )

    //         $("#section2Dot").css("color","cyan");//change to cyan when scrolled to that section

    //         $("#section1Dot").css("opacity","0");//previous section dot disappear

    //     }else if(scrolledFromTop < $("#section2A").offset().top - ($(window).height()/4) &&
    //         scrolledFromTop > $("#section1").offset().top - $(window).height()/4){//scroll up from that section


    //         $("#section2Dot").css("color","var(--white)");//change back to white when scrolled above that section
            
    //         $("#section1Dot").css({//change previous section dot back to cyan
    //                             "color": "cyan",
    //                             "opacity": "1" 

    //                                     })
    //     }
    // }


    // function scrollInteraction3(){

    //     var scrolledFromTop = $(document).scrollTop();

    //     if(scrolledFromTop > $("#section3").offset().top - ($(window).height()/4) &&
    //         scrolledFromTop < $("#section4").offset().top - $(window).height()/4){//scroll down from that section

    //         console.log("you have reached","#section3" )

    //         $("#section3Dot").css("color","cyan");//change to cyan when scrolled to that section

    //         $("#section2Dot").css("opacity","0");//previous section dot disappear

    //     }else if(scrolledFromTop < $("#section3").offset().top - ($(window).height()/4) &&
    //                 scrolledFromTop > $("#section2A").offset().top - $(window).height()/4){//scroll up from that section


    //         $("#section3Dot").css("color","var(--white)");//change back to white when scrolled above that section
            
    //         $("#section2Dot").css({//change previous section dot back to cyan
    //                             "color": "cyan",
    //                             "opacity": "1" 

    //                                     })
    //     }
    // }


    // function scrollInteraction4(){

    //     var scrolledFromTop = $(document).scrollTop();

    //     if(scrolledFromTop > $("#section4").offset().top - ($(window).height()/4) &&
    //         scrolledFromTop < $("#section5").offset().top - $(window).height()/4){//scroll down from that section

    //         console.log("you have reached","#section4" )

    //         $("#section4Dot").css("color","cyan");//change to cyan when scrolled to that section

    //         $("#section3Dot").css("opacity","0");//previous section dot disappear

    //     }else if(scrolledFromTop < $("#section4").offset().top - ($(window).height()/4) &&
    //                 scrolledFromTop > $("#section3").offset().top - $(window).height()/4){//scroll up from that section


    //         $("#section4Dot").css("color","var(--white)");//change back to white when scrolled above that section
            
    //         $("#section3Dot").css({//change previous section dot back to cyan
    //                             "color": "cyan",
    //                             "opacity": "1" 

    //                                     })
    //     }
    // }





///////////////NAVIGATION BAR HOVER ////////////////////////
/////////////////////////////////////////////////////
  // $(".navbar").hover(function(){


    //     //apply this css when the mouse hovers over navbar
    //     $("#section1Dot").css({ "opacity": "1",
    //     "color": "var(--white)"});

    //     console.log("navbar hover");

    //         $("#section1Dot").hover(function(){//when cursor is at navbar, and is hovering the section dot

    //             $(this).css("color", "cyan");
    //         },function(){

    //             $(this).css("color","var(--white)");
    //         });



    //     }, function(){//when the mouse leaves the navbar
        
    //     allScrollInteractions();

    //    console.log("navbar not hover");


    //   });



