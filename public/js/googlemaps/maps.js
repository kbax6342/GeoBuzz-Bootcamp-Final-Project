var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.331, lng: -83.046},
          zoom: 10
        });
      }

// <!--<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyByuvYzv-LExDdr2PWgac8U4Pr9aLHTUVk"></script>-->

      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 42.331, lng: -83.046},
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];
            

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }
        
//        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//      var labelIndex = 0;
//
//      function initialize() {
//        var bangalore = { lat: 12.97, lng: 77.59 };
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 12,
//          center: bangalore
//        });
//
//        // This event listener calls addMarker() when the map is clicked.
//        google.maps.event.addListener(map, 'click', function(event) {
//          addMarker(event.latLng, map);
//        });
//
//        // Add a marker at the center of the map.
//        addMarker(bangalore, map);
//      }
//
//      // Adds a marker to the map.
//      function addMarker(location, map) {
//        // Add the marker at the clicked location, and add the next-available label
//        // from the array of alphabetical characters.
//        var marker = new google.maps.Marker({
//          position: location,
//          label: labels[labelIndex++ % labels.length],
//          map: map
//        });
//      }
//
//      google.maps.event.addDomListener(window, 'load', initialize);


   
   
    
  

