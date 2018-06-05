



$(document).ready(function () {



    $("li").on( 'click', function () {

        var newtext = $(this).html();
        $(this).append("&nbsp;&nbsp;&nbsp;&nbsp;"+ '<span>' + " It's a good movie" + '</span>');



    });
   


});