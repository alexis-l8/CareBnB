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
  console.log(res);
  var userLat= res.result.latitude;
  var userLng = res.result.longitude;
  var mapOptions = {
    zoom: 13,
    center: {
      lat: userLat,
      lng: userLng,
    },
  }
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, mapOptions);

  fetch('/getUsers', createMarkers.bind(this, map));
}

function createMarkers(map, err, res){
  if(err) return new Error('No users');
  var locations = res.map(function(homeOwner){return [homeOwner.name, homeOwner.latitude, homeOwner.longitude]});
  console.log(res);
  var marker;

  // ? WINDOW INFORMATION OBJECT
  var infowindow = new google.maps.InfoWindow();

  locations.forEach(function(homeOwner, index){
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(homeOwner[1], homeOwner[2]),
      animation: google.maps.Animation.DROP,
      map,
    });
    document.getElementById('map_results').children[index].addEventListener('mouseover', (function(marker){
      return function(){
        infowindow.setContent('<section class="googlemarker__content"><span>'+homeOwner[0]+'</span><img src="./assets/'+homeOwner[0]+'_ico.jpg"/></section>');
        infowindow.open(map, marker);
      }
    })(marker));

    google.maps.event.addListener(marker, 'click', (function (marker) {

      return function(){
      infowindow.setContent('<section class="googlemarker__content"><span>'+homeOwner[0]+'</span><img src="./assets/'+homeOwner[0]+'_ico.jpg"/></section>');
      infowindow.open(map, marker);

  }
    })(marker));
    google.maps.event.addListener(marker, 'mouseover', function(event) {
     });

  });
};

function addMarkerListener (marker, infowindow) {

}


function createMap() {
  var params = new URLSearchParams(location.search.slice(1));
  console.log(params);

  var postcode = params.get('postcode').replace(' ', '%20');
      console.log(postcode);
  fetch('https://api.postcodes.io/postcodes/'+postcode, initMap);
}
