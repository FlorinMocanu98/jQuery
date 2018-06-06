
// Each element

/*
$(document).ready(function () {



    $("li").each( function () {



        var newtext = $(this).text();
        $(this).append("&nbsp;&nbsp;&nbsp;&nbsp; length:" + '<span>' + newtext.length + '</span>');



    });
   


}); */




// When you click the button the font color will change between two differents value

/*
$("button").on("click", function () {


    $("li").toggleClass("cool").toggleClass("greeny");


});
*/




// The event object
/*
$("button").on("click", function (e) {

 
    $(this).after("<span style='font-size: 1.5vw;'>" + "<br/>" + "Type of event : " + e.type +
                  "<br/>" + "Button or key pressed : " + e.which +
                  "<br/>" + "An object containg extra information passed to the function : " + e.data +
                  "<br/>" + "DOM element that initiated the event : " + e.target +
                  "<br/>" + "Mouse position from left edge of viewport : " + e.pageX +
                  "<br/>" + "Mouse position from top edge of viewport : " + e.pageY +
                  "<br/>" + "Number of ms from Jan 1st, 1970 to when the event was triggered : " + e.timeStamp + "</span>");


}); 

*/




