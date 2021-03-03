//GLOBAL VARIABLES
var number=3



$(document).ready(function(){

    // //welcomeRoom - popup to input name to display on the welcome screen
    inputPopUp();

    //welcomeRoom - launch
    $(".welcomeRoomButtons#launch").click(function(){
        //swap screen to information 2 group
        $("#welcomeRoomInformation1").css("display","none")
        $("#welcomeRoomInformation2").css("display","block");
    
        //count down
        countDown();
    
        closeRamp();
    })
    

    //cockpit - destination slider
    $("#nextDestinationSlider").slick({ 
        autoplay:true,
        autoplaySpeed: 2000,
        //using arrows to navigate through the slider instead of default html buttons
        nextArrow: $('#arrowRight'),
        prevArrow: $('#arrowLeft'),
        asNavFor: "#nextDestination-stationarySlider" //let this slider control/sync with the other slider (#stationarySlider)
    });

    //cockpit - stationary slider for Go buttons
    $("#nextDestination-stationarySlider").slick({
        fade:true,//gets rid of the transition of the slider
            speed:0,
        arrows:false,
    })
    




  

    //////////FUNCTIONS

    //pop up input
    function inputPopUp(){
        var user = prompt("Please enter your name");

        if(user != null){
            document.querySelector("#userName").innerHTML= user +"!";
        }else{
            document.querySelector("#welcomeText").innerHTML= "Welcome to A2.SPACE!";
        }
    }

    //spaceship countdown
    function countDown(){
        document.querySelector("#countDown").innerHTML = number;

        if(number != 0 ){
            number--;
            console.log(number);
            setTimeout(countDown,1000);
        }else{
            setTimeout(function(){ //displays infromation group 3 after 1 second
                $("#welcomeRoomInformation2").css("display","none")
                $("#welcomeRoomInformation3").css("display","block");
            }
            ,1000);
        
        }
    }


    //close ramp animation
    function closeRamp(){

        $("#rampBottom").addClass("closeRampBottom");//close ramp bottom first
        // console.log("bottom ramp closed");
        
        setTimeout(function(){
            $("#rampBottom").css("display","none");//set ramp bottom to display none
        },1500)

        setTimeout(function(){
            $("#rampTop").addClass("closeRampTop");//close ramp top
            $("#sittingVerticalBottom").css("height","1vh");//height of the page decrease to 1vh
        },2000)

        setTimeout(function(){
            $(".bigContainer").css("height","100vh");//resize height to 1 vh
            $(".bigContainer").css("width","auto");//resize width to reveal the other rooms
            $(".bigContainer").css("overflow-x","visible");//resize height to 1 vh
        },3000)

    }


    console.log("hello world");


});


// POP UP INPUT
// https://www.w3schools.com/jsref/met_win_prompt.asp

// SLICK SLIDER - SOURCE AND TUTORIAL 
// https://kenwheeler.github.io/slick/
//https://www.youtube.com/watch?v=S05EWIHAVcc&ab_channel=AwaMelvine
