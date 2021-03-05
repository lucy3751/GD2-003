// var section2CClick = false;
// var topLayer2Click = false;


console.log("hello world");


////////////SECTION 2 SLIDER//////////
/////////////////////////////////////////



$("#section1").click(function(){

    
    
    sectionEnterPage("#section2A",".sectionsContainer");
    sliderDot(".dot1",".dot2","#sliderDots1","var(--white)");
    displayHiddenContent(".hiddenContent", 0.5);

})


$("#section2ADot").click(function(){
    
    sectionEnterPage("#section2A",".sectionsContainer");
    sliderDot(".dot1",".dot2","#sliderDots1","var(--white)");
    displayHiddenContent(".hiddenContent", 0.5);
})



/////////SECTION 3 SLIDER//////////////
//////////////////////////////////////////


$("#section2C").click(function(){

    sectionEnterPage("#section3A",".sectionsContainer2");

    $(".bottomLayer").addClass("changeColor");//make background layer change color

    sliderDot(".dot2",".dot3","#sliderDots2","var(--black)");
    displayHiddenContent(".hiddenContent2", 0.5);
    // $(".topLayer2").css("height", "auto");
    //   test();

    $(".bottomLayer").css("position","relative");
    $(".bottomLayer").css("height","auto");
    $(".bottomLayer").css("z-index","40");

    $(".topLayer2").remove();

})

$("#section3ADot").click(function(){
    
    sectionEnterPage("#section3A",".sectionsContainer2");

    $(".bottomLayer").addClass("changeColor");//make background layer change color

    sliderDot(".dot2",".dot3","#sliderDots2","var(--black)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);

    console.log("3 clicked");


    $(".bottomLayer").css("position","relative");
    $(".bottomLayer").css("height","auto");
    $(".bottomLayer").css("z-index","40");

    $(".topLayer2").remove();
})


////////////SECTION 4 SLIDER//////////////////
///////////////////////////////////////////
$("#section3C").click(function(){

    sectionEnterPage("#section4A",".sectionsContainer3");
    sliderDot(".dot3",".dot4","#sliderDots3","var(--white)");
    displayHiddenContent(".hiddenContent3",  0.5);

})


$("#section4ADot").click(function(){
    
    sectionEnterPage("#section4A",".sectionsContainer3");
    sliderDot(".dot3",".dot4","#sliderDots3","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
})


////////////SECTION 5 SLIDER//////////////////
///////////////////////////////////////////
$("#section4C").click(function(){

    sectionEnterPage("#section5A",".sectionsContainer4");
    sliderDot(".dot4",".dot5","#sliderDots4","var(--white)");
    displayHiddenContent(".hiddenContent4",  0.5);

})

$("#section5ADot").click(function(){
    
    sectionEnterPage("#section5A",".sectionsContainer4");
    sliderDot(".dot4",".dot5","#sliderDots4","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
})


////////////SECTION 6 SLIDER//////////////////
///////////////////////////////////////////
$("#section5B").click(function(){

    sectionEnterPage("#section6A",".sectionsContainer5");
    sliderDot(".dot5",".dot6","#sliderDots5","var(--white)");
    displayHiddenContent(".hiddenContent5",  0.5);

})

$("#section6ADot").click(function(){
    
    sectionEnterPage("#section6A",".sectionsContainer5");
    sliderDot(".dot5",".dot6","#sliderDots5","var(--white)");

    
    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
    displayHiddenContent(".hiddenContent5",  0);
})


////////////SECTION 7 SLIDER//////////////////
///////////////////////////////////////////
$("#section6B").click(function(){

    sectionEnterPage("#section7A",".sectionsContainer6");
    sliderDot(".dot6",".dot7","#sliderDots6","var(--white)");
    displayHiddenContent(".hiddenContent6",  0.5);

})


$("#section7ADot").click(function(){
    
    sectionEnterPage("#section7A",".sectionsContainer6");
    sliderDot(".dot6",".dot7","#sliderDots6","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
    displayHiddenContent(".hiddenContent5",  0);
    displayHiddenContent(".hiddenContent6",  0);
})



////////////SECTION 8 SLIDER//////////////////
///////////////////////////////////////////
$("#section7C").click(function(){

    sectionEnterPage("#section8A",".sectionsContainer7");
    sliderDot(".dot7",".dot8","#sliderDots7","var(--white)");
    displayHiddenContent(".hiddenContent7",  0.5);

})

$("#section8ADot").click(function(){
    
    sectionEnterPage("#section8A",".sectionsContainer7");
    sliderDot(".dot7",".dot8","#sliderDots7","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
    displayHiddenContent(".hiddenContent5",  0);
    displayHiddenContent(".hiddenContent6",  0);
    displayHiddenContent(".hiddenContent7",  0);
})


////////////SECTION 9 SLIDER//////////////////
///////////////////////////////////////////
$("#section8B").click(function(){

    sectionEnterPage("#section9A",".sectionsContainer8");
    sliderDot(".dot8",".dot9","#sliderDots8","var(--white)");
    displayHiddenContent(".hiddenContent8",  0.5);

})

$("#section9ADot").click(function(){
    
    sectionEnterPage("#section9A",".sectionsContainer8");
    sliderDot(".dot8",".dot9","#sliderDots8","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
    displayHiddenContent(".hiddenContent5",  0);
    displayHiddenContent(".hiddenContent6",  0);
    displayHiddenContent(".hiddenContent7",  0);
    displayHiddenContent(".hiddenContent8",  0);
})

////////////SECTION 10 SLIDER//////////////////
///////////////////////////////////////////
$("#section9C").click(function(){

    sectionEnterPage("#section10A",".sectionsContainer9");
    sliderDot(".dot9",".dot10","#sliderDots9","var(--white)");
    displayHiddenContent(".hiddenContent9",  0.5);

})

$("#section10ADot").click(function(){
    
    sectionEnterPage("#section10A",".sectionsContainer9");
    sliderDot(".dot9",".dot10","#sliderDots9","var(--white)");

    displayHiddenContent(".hiddenContent", 0);
    displayHiddenContent(".hiddenContent2", 0);
    displayHiddenContent(".hiddenContent3",  0);
    displayHiddenContent(".hiddenContent4",  0);
    displayHiddenContent(".hiddenContent5",  0);
    displayHiddenContent(".hiddenContent6",  0);
    displayHiddenContent(".hiddenContent7",  0);
    displayHiddenContent(".hiddenContent8",  0);
    displayHiddenContent(".hiddenContent9",  0);
})


////////////SECTION 11 SLIDER//////////////////
///////////////////////////////////////////
$("#section10C").click(function(){

    sectionEnterPage("#section11A",".sectionsContainer10");
    sliderDot(".dot10",".dot11","#sliderDots10","var(--white)");
    displayHiddenContent(".hiddenContent10",  0.5);

})


//checkpoint


////////////SECTION 12 SLIDER//////////////////
///////////////////////////////////////////
$("#section11C").click(function(){

    sectionEnterPage("#section12A",".sectionsContainer11");
    sliderDot(".dot11",".dot12","#sliderDots11","var(--white)");
    displayHiddenContent(".hiddenContent11",  0.5);

})

















/* /////////////////////////////
///FUNCTIONS//////////////////

1. sectionEnterPage: add "active" class to selected section. Set overflow: visible of the section that is sliding from the left

2. sliderDot: change slider dot color to the next dot. Slider dots fade away

3. displayHiddenContent: set hiddenContent to display block 3s after section has been pressed

4. test: testing function

*/

function sectionEnterPage (section, sectionsContainerNumber){//enter the id/class of the section that is to be enter the page

    $(section).addClass("active");//make the section slide into the page from the left
    //console.log(section + "added class active");

    $(sectionsContainerNumber).css("overflow", "visible" );//set overflow to be visible to avoid content getting clipped
    // console.log(sectionsContainerNumber+" added  overflow:visible;");

}

function sliderDot (currentDot, nextDot, sliderDotsSection, changeColorBack){//sliderDotsSection - ex. #sliderDots1

    $(currentDot).css("color", changeColorBack);//change slider dot to the next one
    $(nextDot).css("color", "cyan");

    $(sliderDotsSection).addClass("sliderDotsFade");//slider dots fade away
    //console.log("slider dots fade away");
    
}


function displayHiddenContent(hiddenContentNumber, time){

    var a= time*1000;

    setTimeout(function(){

        $(hiddenContentNumber).css("display", "block");//display hiddenContent once the section is clicked
        console.log(hiddenContentNumber + " set to display: block")
        //console.log(time + " seconds have passed since section1 was clicked");

    },a);


}




function test(){
    alert("my code is working!");
}





///scrollTop function - how far we scrolled from the top 





// REFERENCES 
//add a css property to a specific class
// https://www.w3schools.com/jquery/jquery_css.asp


//remove a html element
//https://api.jquery.com/remove/