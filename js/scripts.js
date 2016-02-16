var $;
$(document).ready(function () {
    "use strict";
    /*owl carousel fire*/
    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 3]
    });

    //Trigger MixitUp
    $("#container").mixItUp();


    //projects
    $("#projects, #buildings").click(function () {
        $("#spaces, #villas").removeClass("red-btn");
        $(this).addClass("red-btn");
        $(".spaces, .villas").fadeOut("fast");
        $(".projects, .buildings").fadeIn("slow");
    });

    $("#spaces, #villas").click(function () {
        $("#projects, #buildings").removeClass("red-btn");
        $(this).addClass("red-btn");
        $(".projects, .buildings").fadeOut("fast");
        $(".spaces, .villas").fadeIn("slow");
    });

    /* loading page */
    $(window).load(
        function () {
            $(".page-loader").fadeOut(2000, function () {
                $(this).parent().parent().fadeOut(2000);
            });
        }
    );

});
