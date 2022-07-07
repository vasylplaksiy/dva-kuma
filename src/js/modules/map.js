function initMap() {
  const ivfr = { lat: 48.7606749, lng: 24.5172116 };
  var mapOptions = {
    zoom: 15,
    center: ivfr,
    mapTypeId: "terrain",
    disableDefaultUI: true,
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#fcfcfc",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#fcfcfc",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#dddddd",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#dddddd",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#dddddd",
          },
        ],
      },
    ],
  };

  var map = new google.maps.Map(
    document.getElementById("contactMap"),
    mapOptions
  );

  const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

  const marker = new google.maps.Marker({
    position: ivfr,
    map: map,
    icon: "css/img/map_ua.png",
  });
}
