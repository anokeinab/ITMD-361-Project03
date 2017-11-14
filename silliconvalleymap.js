function initMap() {
        var uluru = {lat: 37° 21' 45.0612, lng: -122° 2' 5.136"};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
			Latitude:37° 21' 45.0612". Longitude:-122° 2' 5.136". 