

// Example N1
/*
$("button:last").on("click", function () {


    $("button:first").toggle(600, "linear");


}); */





// Example N2
/*
$("button:last").on("click", function () {

    $("button:first").fadeOut(600, function () {

        $("button:first").css("background-color", "green").text("Hello Again").fadeIn(2000, function () {

            $("button:last").text("Welcome back!").fadeIn(500);

        });


    });

});

*/





// Example N3
/*
$("li").each(function () {


    $(this).on("click", function () {


        $(this).fadeTo(700, 0.25, function () {

            $(this).append("&nbsp;&nbsp;&nbsp;OK!").css("color", "blue").fadeIn(2000, "swing")


        });

    });

});

*/



// Example N4
/*
$("ol").on("click", function () {

    $("ol").slideUp(1000, "swing", function () {

        $("body").append("The list is disappeared!").css("font-size", "2vw");

    });



});
*/



// Example N5
/*
$("ol").hide();
$("button").on("click", function () {


    //if ($("ol").is(":hidden"))
    $("ol").slideDown(600, "swing");
 


});
*/



// Example N6
/*
$("button").on("click", function () {

    $("ol").slideToggle(500, "linear");

});
*/






// Example N7
/*
var count = 100;
$("li").on("click", function () {

    

    $(this).animate({

        fontSize: 60,
        paddingLeft: count,
        opacity: 0.4
    }, 600, "linear");


    count = count + 100;

});
*/


