document.addEventListener("DOMContentLoaded", function(event) {


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






});
