var navTop = $("#home").offset().top;
var header = $("#header").offset().top;
var role = $("#role").offset().top;
var feedback = $("#feedback").offset().top;
var profile = $("#profile").offset().top;
var globe = $("#globe").offset().top;

$(document).scroll(function() {
    var scrollPosition = $(document).scrollTop();
    if(scrollPosition >= navTop && scrollPosition < role) {
        $("#mainNav").css("background", "#49556C");
    } else if(scrollPosition >= role && scrollPosition < feedback) {
        $("#mainNav").css("background", "#00BDB1");
    } else if(scrollPosition >= feedback && scrollPosition < profile) {
        $("#mainNav").css("background", "#49556C");
    } else if(scrollPosition >= profile && scrollPosition < globe) {
        $("#mainNav").css("background", "#FF9A2A");
    } else if(scrollPosition >= globe) {
        $("#mainNav").css("background", "#49556C");
    }
})