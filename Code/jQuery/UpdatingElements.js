




$(document).ready(function () {

    var $newitem = $("<li>Inception</li>");
    var $newitem2;



/* UPDATING ELEMENTS */
 


    // .html() interprets the markup, the code below will display 'Mr Nobody' in bold
      //$("li:first").html("<b>Mr Nobody</b>");


    // .text() doesn't keep any markup, the code below will display just 'Mr Nobody'
      //$("li:last").text("<b>Mr Nobody</b>");

    
    // And here there's an example of difference between .html() and .text()
      //$newitem2="<b>Mr Nobody</b>";
      //$("li:last").text($newitem2);
      //$("li:last").html($newitem2);


    // Both will display the same result '4. Mr Nobody'. There's no difference if you assign $('li:first').text() to the variable
      //$newitem2 =$('li:first').html();      
      //$("li:last").text($newitem2);
      //$("li:last").html($newitem2);
      

    // Both will display the same result '4. Mr Nobody'
      //$newitem2="Mr Nobody";
      //$("li:last").html($newitem4);
      //$("li:last").text($newitem4);


    // Remove the li elements that have odd index
      //$('li:odd').remove();


    // Remove the entire list
      //$("ol").remove();


    // All will display the same result
      //$("li.favourite").remove();
      //$("li:first").remove();
      //$("li:nth-child(1)").remove();

    
    // .replaceWith() replace the element, not the content, it also will interpret any markup
      //$("ol").replaceWith("<b>Something else</b> </br>");

    
    // The first element of the list already had a class, but it was replaced
      //$("li:nth-child(1)").attr("class" , "greeny");


    // You can also do something like this
      //$("li:last").attr("title", "Nice one");
      //$("li:last").attr("style" , "color: orange; font-style:oblique;");


    // And finally you can also remove one/more attribute
      //$("li:first").removeAttr("class");


    // Adds the specified class
      //$("li:first").addClass("cool");


    // Adds the specified classes, the last one specified will take precedence
      //$("li:first").addClass("cool, favourite");


    // Remove the class specified
      //$("li:first").removeClass("greeny");


    // Remove all classes
      //$("li:first").removeClass();

    // Will not remove anythig
      //$("li:first").removeClass("");


    // Get and set a css property
      //var color = $("li:first").css("color");
      //$("li:nth-child(3)").css("color", color);

    //
    $("li:first").css("color", "blue").css("font-style", "italic").text("The wolf of Wall Street").append("&check;");
    
}); 



 