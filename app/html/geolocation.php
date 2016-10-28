<!DOCTYPE html>
<html lang="en-us">
<head>
    <title>EGM - geolocation </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <!-- The theme bootswatch Sandstone -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/sandstone/bootstrap.min.css">    
    <!-- Application specific scripts -->
    <script type="text/javascript" src="../js/tempAPIkey.js"></script>
    <script type="text/javascript" src="../js/app.js"></script>
</head>
<body>
<div class="well">Geocoding example</div>

<div class="panel panel-default">
  <div class="panel-body">
      Remember that serving this file as https will conflict with resources that are not
      served securely such as 'http://ipinfo.io' and those unsecure resources will be
      blocked.  So just change the url prefix from https:// to http:// in the browser url bar.
  </div>
</div>

<!--
-->
<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8UhPDpRY2n00z0IXsPu64FRlD1Gyq7Kc">
</script>



<script>
  /*global $ */
  var geocoder;
  var map;
  var pos;
  $.getJSON('http://ipinfo.io', function(data,status){
      if(status === "success") {
          console.log("ipinfo.io status: " + status);//debug only
          initialize(data);
      }else{
          console.log("ipinfo.io status: " + status);//debug only
      }
  });



  function initialize(initial) {
    var aryInitLoc = initial.loc.split(",");
    var objInitialCenter = {"lat":Number(aryInitLoc[0]),"lng":Number(aryInitLoc[1])};
    geocoder = new google.maps.Geocoder();

    var mapOptions = {
      zoom: 14,
      center: objInitialCenter
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    //# # # # # # # # # # # # # # # # # # # # # # # # # # #
    var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
    //# # # # # # # # # # # # # # # # # # # # # # # # # # #





  }

  function codeAddress() {
    var address = document.getElementById('address').value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {

        map.setCenter(results[0].geometry.location);
        console.log("results[0].geometry.location: "+ JSON.stringify(results[0].geometry.location) ); // debug only
        document.getElementById("locationLatLng").innerHTML=JSON.stringify(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
</script>



<div>
 <div id="map" style="width: 320px; height: 480px;"></div>
<div id="locationLatLng"></div>

  <div>
    <input id="address" type="textbox" value="Sydney, NSW">
    <input type="button" value="Encode" onclick="codeAddress()">
  </div>
</div>


</body>
</html>