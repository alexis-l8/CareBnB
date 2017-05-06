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
  var userLatitude= res.result.latitude;
  var userLongitude = res.result.longitude;


  var locations = [
    ['Barbara B.', 51.532131, -0.038538, 1],
    ['Marjorie S.', 51.530649, -0.038366, 2],
    ['Harry D.', 51.529501, -0.038152, 3],
    ['Alistair M.', 51.528086, -0.038066, 4],
  ];

  // CREATES BASIC GOOGLE MAP
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(userLatitude, userLongitude),
  });

  // ? WINDOW INFORMATION OBJECT
  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      animation: google.maps.Animation.DROP,
      map,
    });

    google.maps.event.addListener(marker, 'click', ((marker, i) => () => {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    })(marker, i));
  }
}


function createMap() {
  var params = (new URLSearchParams(location.search.slice(1)));
  var postcode = params.get('postcode').replace(' ', '%20');

  fetch('https://api.postcodes.io/postcodes/'+postcode, initMap);
}
