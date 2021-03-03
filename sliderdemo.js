console.log("slick slider demo");




$(document).ready(function(){


    $("#slider").slick({ 
        //using arrows to navigate through the slider instead of default html buttons
        nextArrow: $('#arrowRight'),
        prevArrow: $('#arrowLeft'),
        asNavFor: "#stationarySlider" //let this slider control/sync with the other slider (#stationarySlider)
    });

    $("#stationarySlider").slick({
        fade:true,//gets rid of the transition of the slider
            speed:0,
        arrows:false,
    })
    




});

  