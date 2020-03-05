function initMap(){
    var pos ={lat:48.854549,lng: 2.299771};
    var opt = {
        center: {lat:48.854549,lng: 2.299771},
        zoom:5,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#333333"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#212121"
                }
              ]
            },
            {
              "featureType": "administrative",
              "stylers": [
                {
                  "color": "#333333"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#333333"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#494949"
                },
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "stylers": [
                {
                  "color": "#333333"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#8febbb"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text",
              "stylers": [
                {
                  "color": "#bdbdbd"
                },
                {
                  "saturation": -100
                },
                {
                  "lightness": -30
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                },
                {
                  "lightness": -80
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#008000"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#393959"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape.natural.terrain",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#181818"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#343434"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1b1b1b"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#560301"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8a8a8a"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#373737"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "simplified"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3c3c3c"
                },
                {
                  "visibility": "off"
                },
                {
                  "weight": 0.5
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#272727"
                },
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#383838"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "stylers": [
                {
                  "color": "#560301"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#4e4e4e"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#2a2a2a"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 1.5
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#3a3a3a"
                },
                {
                  "visibility": "on"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "off"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "visibility": "on"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#494949"
                },
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "stylers": [
                {
                  "color": "#262626"
                },
                {
                  "weight": 1
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#000000"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#262626"
                },
                {
                  "weight": 1.5
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3d3d3d"
                }
              ]
            }
          ]
    };
    
    var map = new google.maps.Map(document.getElementById("map"), opt);
    var marker = new google.maps.Marker({position: pos, map: map, icon:'../img/svg/Ellipse2.svg'});


    
}