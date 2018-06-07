

$(document).ready(function () {


    var $newitem = $("<li>Inception</li>");
    var $newitem2;

    /* FINDING ELEMENTS BY ORDER */


    // This finds all the items with the index greater than 2
    //$("li:gt(2)").addClass("cool");



    // This finds all the items with the index less than 2
    //$("li:lt(2)").addClass("cool");



    // And there is also eq() that specifies the index
    //$("li").eq(0).addClass("cool");



    // This works the same as eq()
    //$("first:nth-child(0)").addClass("cool");



    // Add a new selector
    //$("li:nth-child(1)").css({ "color": "blue" , "font-style" : "italic" }).add("li:nth-child(3)").css("font-size", "3vw");



    // Another example
    //$("li:first").css("color", "blue").add("li:nth-child(2)").css("font-size", "3vw").add("li:nth-child(3)").css("font-style", "italic");




    // Filter 
    /*
    $("li").filter(function (index) {

        return index % 3 === 2;

    }).css("color", "blue");

    */




    // Another filter example, note the even filter will select odd numbers (index starts at 0)
    //$("li").filter(":even").css("color", "blue");




    // .is()

    $("li").each(function () {

        var $this = $(this);
        if ($this.is(":even"))
            $this.css("color", "green").append("&nbsp;&nbsp; Nice one!");

    });


});