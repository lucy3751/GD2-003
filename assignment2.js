//GLOBAL VARIABLES



//EXECUTABLE CODE
// inputPopUp();


// FUNCTIONS
console.log("hello world");


function inputPopUp(){
    var user = prompt("Please enter your name");

    if(user != null){
        document.querySelector("#welcomeText").innerHTML= "Welcome to the spaceship "+ user + "!";
    }else{
        document.querySelector("#welcomeText").innerHTML= "Welcome to the spaceship!";
    }

}






// POP UP INPUT
// https://www.w3schools.com/jsref/met_win_prompt.asp
