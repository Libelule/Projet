<?php
include "connect.php";

if (isset($_GET["ligne"])) {
  $ligne = $_GET["ligne"];
  
	$reponse=$bdd->query("SELECT DISTINCT trip_id, stop_lat, stop_lon, stop_name, stop_times.stop_sequence FROM stops INNER JOIN stop_times ON stops.stop_id=stop_times.stop_id WHERE stop_times.trip_id='".$ligne."' ORDER BY CONVERT( stop_times.stop_sequence, SIGNED INTEGER ) ASC ");
	$ligne = $reponse->fetchall() ;
    echo json_encode($ligne);
}
?>