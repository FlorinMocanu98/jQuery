


  $(document).ready(function () {

  var $newitem=$("<li>Inception</li>");
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
    



  /* FINDING ELEMENTS BY ORDER */


    // This finds all the items with the index greater than 2
      //$("li:gt(2)").addClass("cool");



    // This finds all the items with the index less than 2
      //$("li:lt(2)").addClass("cool");


    // And there is also eq() that specifies the index
      //$("li").eq(0).addClass("cool");

    //
   

       
  }); 
