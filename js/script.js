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





});
