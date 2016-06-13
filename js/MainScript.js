
$(document).ready(function () {
    
 
    $(".mobile-button").click(function () {
        if ($("#MainMenu ul").hasClass("mobile-nav") != true) {
            $("#MainMenu ul").addClass("mobile-nav");
            $("#MainMenu ul").removeClass("main-nav");
            $("#MainMenu ul").removeClass("menu");
            $("#MainMenu ul").show();
        }
        else {
            $("#MainMenu ul").removeClass("mobile-nav");
            $("#MainMenu ul").hide();
        }
          
        }
   
)

});