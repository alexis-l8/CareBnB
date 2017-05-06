function initMap() {
  const locations = [
    ['Barbara B.', 51.532131, -0.038538, 1],
    ['Marjorie S.', 51.530649, -0.038366, 2],
    ['Harry D.', 51.529501, -0.038152, 3],
    ['Alistair M.', 51.528086, -0.038066, 4],
  ];

  // CREATES BASIC GOOGLE MAP
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(51.529506, -0.042201),
  });

  // ? WINDOW INFORMATION OBJECT
  const infowindow = new google.maps.InfoWindow();

  let marker;
  let i;

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
