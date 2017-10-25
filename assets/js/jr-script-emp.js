var navTop = $("#header").offset().top;
var belowHeader = $("#belowHeader").offset().top;
var finding = $("#finding").offset().top;
var assessment = $("#assessment").offset().top - 66;
var pricing = $("#pricing").offset().top - 66;
var whywork = $("#whywork").offset().top;

if ($(window).width() < 992) {
    $("#mainNav").css("background", "#49556C");
} else {
    navBkgEmp();
}

function navBkgEmp() {
    $(document).scroll(function () {
    var scrollPosition = $(document).scrollTop();
        if (scrollPosition >= navTop && scrollPosition < belowHeader) {
            $("#mainNav").css("background", "transparent");
        } else if (scrollPosition >= belowHeader && scrollPosition < finding) {
            $("#mainNav").css("background", "#49556C");
        } else if (scrollPosition >= finding && scrollPosition < assessment) {
            $("#mainNav").css("background", "#FF9A26");
        } else if (scrollPosition >= assessment && scrollPosition < pricing) {
            $("#mainNav").css("background", "#FF9A26");
        } else if (scrollPosition >= pricing && scrollPosition < whywork) {
            $("#mainNav").css("background", "#00BDB1");
        } else if (scrollPosition >= whywork) {
            $("#mainNav").css("background", "#00BDB1");
        }
    })
}