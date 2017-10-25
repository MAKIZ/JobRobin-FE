var navTop = $("#header").offset().top;
var belowHeader = $("#belowHeader").offset().top;
var role = $("#role").offset().top - 66;
var feedback = $("#feedback").offset().top;
var profile = $("#profile").offset().top-60;
var globe = $("#globe").offset().top;

if ($(window).width() < 992) {
    $("#mainNav").css("background", "#49556C");
} else {
    navBkgCand();
}

function navBkgCand() {
    $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
        if (scrollPosition >= navTop && scrollPosition < belowHeader) {
            $("#mainNav").css("background", "transparent");
        } else if (scrollPosition >= belowHeader && scrollPosition < role) {
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