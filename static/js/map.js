var marker1, marker2;
var map;

function initMap() {
    // 52.3533494,4.9424607
    // 52.3531429,4.9357809
    
    var icons = [
        '/static/images/markers/1.png',
        '/static/images/markers/2.png',
        '/static/images/markers/3.png',
        '/static/images/markers/4.png',
        '/static/images/markers/5.png',
        '/static/images/markers/6.png',
        '/static/images/markers/7.png',
        '/static/images/markers/8.png',
        '/static/images/markers/9.png',
        '/static/images/markers/9plus.png'
    ];
    
    var styles = [
        {
            "featureType": "landscape",
            "stylers": [
                { "color": "#354052" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
                { "color": "#354052" }
            ]
        },{
            "featureType": "water",
            "stylers": [
                { "color": "#808080" }
            ]
        },{
            "featureType": "road.highway",
            "stylers": [
                { "color": "#aeaeae" }
            ]
        },{
            "elementType": "labels.text.fill",
            "stylers": [
                { "color": "#d3d3d3" }
            ]
        },{
            "elementType": "labels.text.stroke",
            "stylers": [
                { "color": "#354052" }
            ]
        },{
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                { "color": "#ffffff" },
                { "visibility": "off" }
            ]
        }
    ];
    
    var $map = document.getElementById('map');
    map = new google.maps.Map($map, {
        center: { lat: 52.3580492, lng: 4.9356868 },
        zoom: 14,
        minZoom: 14,
        disableDefaultUI: true
    });
    
    map.setOptions({styles: styles});
}

function createMarkers(icon1, icon2) {
    if (marker1 || marker2) {
        marker1.setMap(null);
        marker2.setMap(null);
    }
    
    marker1 = new google.maps.Marker({
        position: { lat: 52.3533494, lng: 4.9424607 },
        map: map,
        title: 'Sensor 1'
    });
    
    marker2 = new google.maps.Marker({
        position: { lat: 52.3531429, lng: 4.9357809 },
        map: map,
        title: 'Sensor 2'
    });
}