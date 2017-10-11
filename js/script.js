$(document).ready(function() {


// Adding static google map to footer
    function initMap() {
            var clinic = {lat: 51.757523, lng: 19.414962};
            var map = new google.maps.Map(document.querySelector(".contact-map"), {
              zoom: 16,
              center: clinic
            });
            var marker = new google.maps.Marker({
              position: clinic,
              map: map
            });
          }

initMap();

// Hamburger menu

$(".hamburger").on("click", function() {
    $(".hamburger-menu").toggleClass("visible-hamburger-menu");
    $(".bar").toggleClass("clicked-hamburger-bar");
});

// Gallery - zoom on click

$(".image").on("click", function() {

    if ($(window).width() > 881) {
        $(".zoom-in").toggleClass("zoom-in-visible");
        var image = $(this).find("img").clone();
        $(".zoom-in").append(image);
        $(".zoom-in").find("img").css("width", "100%");
        $(".zoom-in").find("img").css("height", "100%");
    }
});

$("#close").on("click", function() {
    $(".zoom-in").removeClass("zoom-in-visible");
    var image = $(".zoom-in").find("img").remove();
})

// Header, scrolling

$(".addon").on("click", function() {
    window.scrollBy({
        top: 600,
        left: 0,
        behavior: 'smooth'
    });
})


});
