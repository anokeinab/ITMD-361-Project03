function initMap() {
        var brazzaville = {lat: -4.27934, lng: 15.26039};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: brazzaville
        });
        var marker = new google.maps.Marker({
          position: brazzaville,
          map: map
        });
      }
