



$(document).ready(function () {

    var $newitem = $("<li>Inception</li>");
    var $newitem2;


/* INSERTING ELEMENTS */



    // If you like crazy things..
      //$("li").prepend($newitem);


    // Append the item at the end of the list
      //$("ol").append($newitem);


    // Prepend the item at the top of the list
      //$("ol").prepend($newitem);


    // Insert the item before the list, it's not part of the list
      //$("ol").before($newitem);


    // Insert the item after the list, it's not part of the list
      //$("ol").after($newitem);


    // Ok, this shows how powerful is jQuery
      //$('li:nth-child(3)').append("  My favourite!").css("color", "green").css("font-size","3vw");


    // Yeah, this example is pretty cute
      // $("li:nth-child(1), li:nth-child(4), li").after("  Nice one").css("color","blue");


    // I know, I know, this sounds strange. Only the element's text changes, not 'Awesome'
      //$("li:nth-child(2)").before("  Awesome  ").css("color","green").css("font-style", "italic");




}); 
