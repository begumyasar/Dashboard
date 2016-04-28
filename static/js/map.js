function initMap() {
    var $map = document.getElementById('map');
    var map = new google.maps.Map($map, {
        center: { lat: 52.350315, lng: 4.888296 },
        zoom: 14
    });
}