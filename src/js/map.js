function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    disableDefaultUI: true,
    scrollwheel: false,
    center: {lat: 43.6519245, lng: -79.3917685}
  });

  var image = 'dist/images/a_on_map.png';
  var beachMarker = new google.maps.Marker({
    position: {lat: 43.65, lng: -79.3917685},
    map: map,
    icon: image
  });

  var center;
    function calculateCenter() {
      center = map.getCenter();
    }
    google.maps.event.addDomListener(map, 'idle', function() {
      calculateCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function() {
      map.setCenter(center);
    });
};
