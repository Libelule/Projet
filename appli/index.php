<?php
//Connexion BDD
include "connect.php";

if (isset($_GET["code"])) {
//Récupération code
  $code = $_GET["code"];
  //Requête
	$reponse=$bdd->query("SELECT trip_id,stop_id,stop_sequence,arrival_time,departure_time FROM stop_times WHERE trip_id LIKE '%$code%' ");
	$heures = $reponse->fetchall() ;
    echo json_encode($heures);
}

if (isset($_GET["valeur"])) {
//Récupération de la valeur
  $valeur = $_GET["valeur"];
  //Requête
	$reponse=$bdd->query("SELECT stop_id,stop_name,stop_desc FROM stops WHERE stop_name LIKE '%$valeur%' ");
	$calcul = $reponse->fetchall() ;
    echo json_encode($calcul);
}

if (isset($_GET["ligne"])) {
//Récupération de la ligne
  $ligne = $_GET["ligne"];
  //Requête
	$reponse=$bdd->query("SELECT DISTINCT trip_id, stop_lat, stop_lon, stop_name, stop_times.stop_sequence FROM stops INNER JOIN stop_times ON stops.stop_id=stop_times.stop_id WHERE stop_times.trip_id='".$ligne."' ORDER BY CONVERT( stop_times.stop_sequence, SIGNED INTEGER ) ASC ");
	$ligne = $reponse->fetchall() ;
    echo json_encode($ligne);
}
?>
