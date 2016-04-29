var marker1, marker2;
var map;

var icons = [
    '/static/images/markers/0.png',
    '/static/images/markers/1.png',
    '/static/images/markers/2.png',
    '/static/images/markers/3.png',
    '/static/images/markers/4.png',
    '/static/images/markers/5.png',
    '/static/images/markers/6.png',
    '/static/images/markers/7.png',
    '/static/images/markers/8.png',
    '/static/images/markers/9plus.png',
];

var data = [];
var ldr1Data = 0;
var ldr2Data = 0;
    

function initMap() {
    // 52.3533494,4.9424607
    // 52.3531429,4.9357809
    
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
        center: { lat: 52.35027805292352, lng: 4.923315910548357 },
        zoom: 15,
        disableDefaultUI: true
    });
    
    map.setOptions({styles: styles});
    
    info1 = new google.maps.InfoWindow();
    info2 = new google.maps.InfoWindow();
    
    createMarkers(1, 4);
    
    updateData();
    setInterval(function() {
        updateData();
    }, 10000);
}

function createMarkers(value1, value2) {
    
    if (marker1 || marker2) {
        marker1.setMap(null);
        marker2.setMap(null);
    }
    
    var icon1 = icons[value1];
    var icon2 = icons[value2];
    
    marker1 = new google.maps.Marker({
        position: { lat: 52.3533494, lng: 4.9424607 },
        map: map,
        icon: icon1
    });
    
    marker2 = new google.maps.Marker({
        position: { lat: 52.3531429, lng: 4.9357809 },
        map: map,
        icon: icon2
    });
    
    marker1.addListener('click', function() { 
        window.location.href = 'esp1.html';
    });
    
    marker2.addListener('click', function() {
        window.location.href = 'esp2.html';
    });
}

function updateData() {
    var currentDate = new Date();
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1;
    var year = currentDate.getUTCFullYear();
    
    fetch('http://api.leandervanbaekel.nl/alarm/day/' + day + '/' + month + '/' + year + '/esp1/true')
        .then(function(response) {
           return response.json(); 
        })
        .then(function(data) {
            console.log(data);
           ldr1Data = data.length;
           
           if (ldr1Data > 9) { ldr1Data = 9; }
           
           createMarkers(ldr1Data, ldr2Data);
        });
        
    fetch('http://api.leandervanbaekel.nl/alarm/day/' + day + '/' + month + '/' + year + '/esp2/true')
        .then(function(response) {
           return response.json(); 
        })
        .then(function(data) {
            console.log(data);
           ldr2Data = data.length;
           
           if (ldr2Data > 9) { ldr2Data = 9; }
           
           createMarkers(ldr1Data, ldr2Data);
        });
}