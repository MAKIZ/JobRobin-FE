var navTop = $("#home").offset().top;
var belowHome = $("#belowHome").offset().top;
var role = $("#role").offset().top;
var feedback = $("#feedback").offset().top;
var profile = $("#profile").offset().top;
var globe = $("#globe").offset().top;

if ($(window).width() < 992) {
    $("#mainNav").css("background", "#49556C");
} else {
    navbkg();
}

function navbkg() {
    $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
        if (scrollPosition >= navTop && scrollPosition < belowHome) {
            $("#mainNav").css("background", "transparent");
        } else if (scrollPosition >= belowHome && scrollPosition < role) {
            $("#mainNav").css("background", "#49556C");
        } else if (scrollPosition >= role && scrollPosition < feedback) {
            $("#mainNav").css("background", "#00BDB1");
        } else if (scrollPosition >= feedback && scrollPosition < profile) {
            $("#mainNav").css("background", "#00BDB1");
        } else if (scrollPosition >= profile && scrollPosition < globe) {
            $("#mainNav").css("background", "#FF9A2A");
        } else if (scrollPosition >= globe) {
            $("#mainNav").css("background", "#FF9A2A");
        }
    })
}