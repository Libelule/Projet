//-----------------  SCRIPT PRINCIPAL -------------------------

window.addEventListener("load", afficherCarte);

//-----------------  FONCTIONS -------------------------
// role : ?
// parametres : ?
// retour : ?

function afficherCarte(eve) {
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(actionSiSucces, actionSiPb);
else
  console.log("Votre navigateur ne prend pas en compte la géolocalisation");
}
   
// role : ?
// parametres : ?
// retour : ?
function actionSiSucces(position){


var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
var optionsMap = {
      zoom: 5, 
      center: latlng,
      mapTypeId: google.maps.MapTypeId.SATELLITE
};
var map = new google.maps.Map(document.getElementById("zone"), optionsMap);

var optionsMarker = {
      position: latlng, 
      map: map, 
      title:"c'est ici" 
};

var marker = new google.maps.Marker(optionsMarker);
}

// role : ?
// parametres : ?
// retour : ?
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
      break;
    }
} 

