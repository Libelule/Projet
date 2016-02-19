
//-----------------  SCRIPT PRINCIPAL -------------------------
var optionsMap;
window.addEventListener("load", init);
var map;
var directionsService;
var directionsDisplay

//----------------- FONCTIONS ----------------------
function init(eve) {
	if (navigator.geolocation)
	  navigator.geolocation.getCurrentPosition(actionSiSucces, actionSiPb);
	else
	  console.log("Votre navigateur ne prend pas en compte la géolocalisation");
	}
	   
function actionSiSucces(position){
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  optionsMap = {
      zoom: 10, 
      center: latlng,
      mapTypeId: google.maps.MapTypeId.SATTELITE
	};

  map = new google.maps.Map(document.getElementById('zone'), optionsMap);

  var optionsMarker = {
      position: latlng, 
      map: map, 
      title:"Vous etes ici" 
	};

	var marker = new google.maps.Marker(optionsMarker);

  //----test affichage itineraires-------
    document.getElementById("l1").addEventListener("click", function(){
    var ligne = document.getElementById("l1").value;
    $.get("http://vsp149406.nfrance.com/~16_fernandes/Libellus/index.php?ligne="+ligne, null, afficher, "json");
  });

}

function afficher(dataJSON){
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer({
    polylineOptions: {
      strokeColor: ""
    }
  });

  directionsDisplay.setMap(map);

  if(dataJSON[i].trip_id == "L1Aller0001"){
    directionsDisplay.polylineOptions.strokeColor = "green";
  }
  var waypts = [];
  for(i=1; i<=8; i++){
    var latlng = new google.maps.LatLng(dataJSON[i].stop_lat, dataJSON[i].stop_lon)
    var point = {location : latlng, stopover : false};
    waypts.push(point);
  }
  var directionsRequest = {
    origin: new google.maps.LatLng(43.615264, 2.249882), //Bouriatte,
    waypoints: waypts,
    destination: new google.maps.LatLng(43.589893, 2.189078), //chartreuse,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  };

  directionsService.route(directionsRequest, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK)
    {
      directionsDisplay.setDirections(response);
    }
    else
      $("#error").append("Unable to retrieve your route<br />");
    }
  );
}

function actionSiPb(error){
  switch(error.code){
    case error.PERMISSION_DENIED:
      console.log(error.message+" : l'utilisateur n'a pas autorisé l'accès à sa position");
      break;     
    case error.POSITION_UNAVAILABLE:
      console.log(error.message+" : l'emplacement de l'utilisateur n'a pas pu être déterminé");
      break;
    case error.TIMEOUT:
      console.log(error.message+" : le service n'a pas répondu à temps");
    }
}