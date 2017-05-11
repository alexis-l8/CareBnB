/* eslint-disable */
var fetch = function(url, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        cb(null, JSON.parse(xhr.responseText));
      } else {
        cb(new Error('Api request failed'));
      }
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

function initMap(err, res) {
  if (err) throw err;
  var userLat= res.result.latitude;
  var userLng = res.result.longitude;
  var userCenter = {lat: userLat, lng: userLng};
  var mapOptions = {
    zoom: 13,
    center: {
      lat: userLat,
      lng: userLng,
    },
  }
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, mapOptions);
  addMarker(userCenter, map, './assets/Icons8-Windows-8-Maps-Center-Direction.ico');

  fetch('/getUsers', createMarkers.bind(this, map));
}

function createMarkers(map, err, res){
  if(err) return new Error('No users');
  var locations = res.map(function(homeOwner){return [homeOwner.name, homeOwner.latitude, homeOwner.longitude]});
  var marker;

  // ? WINDOW INFORMATION OBJECT
  var infowindow = new google.maps.InfoWindow();

  locations.forEach(function(homeOwner, index){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(homeOwner[1], homeOwner[2]),
      animation: google.maps.Animation.DROP,
      icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      map,
    });

    document.getElementById('map_results').children[index].addEventListener('mouseover', function(marker){
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
      map.panTo({lat:homeOwner[1], lng: homeOwner[2]});

      }.bind(this, marker));
      document.getElementById('map_results').children[index].addEventListener('mouseout', function(marker){
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');

        }.bind(this, marker));

    google.maps.event.addListener(marker, 'click', (function (marker) {
      infowindow.setContent('<section class="detailedresults-images markercontent"><button class="detailedresults-images__button" onclick="plusDivs(-1)">&#10094;</button><img class="detailedresults-images__image" src="./assets/fuggerei.jpg"/><img class="detailedresults-images__image" src="./assets/inside-the-hotel-property.jpg"/><img class="detailedresults-images__image" src="./assets/living-room-inside-property.jpg"/><button class="detailedresults-images__button" onclick="plusDivs(+1)">&#10095;</button></section>');
      infowindow.open(map, marker);
      showDivs(slideIndex);


    }.bind(this, marker)));
    google.maps.event.addListener(marker, 'mouseover', function(event) {
     });

  });
};

function addMarker (location, map, icon) {
  icon = icon || null;
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: icon,
  });
}


function createMap() {
  fetch('/postcode', function (err, res) {
    if (err) throw err;
    var postcode = res.postcode;
    fetch('https://api.postcodes.io/postcodes/'+postcode, initMap);
  })
}
