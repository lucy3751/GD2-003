console.log("hello world");


////////////SECTION 2 SLIDER//////////
/////////////////////////////////////////
$("#section1").click(function(){

    $("#section2A").addClass("active");//make section2A slide into the page from the left
    console.log("section 2A added class active");

    $(".sectionsContainer").css("overflow", "visible" );//set overflow to be visible to avoid content getting clipped
    console.log("sectionsContainer added  overflow:visible;");

   

    $("#dot1").css("color", "inherit");//change slider dot to the next one
    $("#dot2").css("color", "cyan");

    $("#sliderDots1").addClass("sliderDotsFade");//slider dots fade away
  

    setTimeout(function(){

        $(".hiddenContent").css("display", "block");//display hiddenContent once section1 is clicked
        console.log("hiddenContent set to display: block")
        console.log("3 seconds have passed since section1 was clicked");

    },10);


})


/////////SECTION 3 SLIDER//////////////
//////////////////////////////////////////

$("#section2C").click(function(){

  

})








///scrollTop function - how far we scrolled from the top 





// REFERENCES 
//add a css property to a specific class
// https://www.w3schools.com/jquery/jquery_css.asp