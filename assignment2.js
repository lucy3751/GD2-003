//GLOBAL VARIABLES
var number=3


//EXECUTABLE CODE
// inputPopUp();

// FUNCTIONS

$(".welcomeRoomButtons#launch").click(function(){
    //swap screen to information 2 group
    $("#welcomeRoomInformation1").css("display","none")
    $("#welcomeRoomInformation2").css("display","block");

    //count down
    countDown();

    closeRamp();
    
})













//pop up input
function inputPopUp(){
    var user = prompt("Please enter your name");

    if(user != null){
        document.querySelector("#userName").innerHTML= user +"!";
    }else{
        document.querySelector("#welcomeText").innerHTML= "Welcome to the spaceship!";
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




// POP UP INPUT
// https://www.w3schools.com/jsref/met_win_prompt.asp
