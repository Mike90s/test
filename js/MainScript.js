
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
    $(".submit_button").click(function () {
       
        
        $(".thank-you-hide").show(); 
        $(".form-subscription").hide();
        

    }

)
    

    var config1 = {
        "id": '345170787868762112',
        "domId": 'tweetMessage',
        "maxTweets": 1,
        "enableLinks": true
    };
    twitterFetcher.fetch(config1);

 
 
});