function afficheRes(dataJSON) {
//Récupération de la ligne
var res = $("#ligne");
res.empty();

for (var i=0 ; i < dataJSON.length ; i++) {
//Récupération des données
var arret= dataJSON[i].stop_id;
var heure = dataJSON[i].arrival_time;
var sequence =dataJSON[i].stop_sequence;
if (sequence != 0)
{
//Affichage des horaires
res.append("<p>"+arret+" | "+heure+"</p>");
$("#ligne").append(res);
}
else
{res.append("</br>")
res.append("<p>"+arret+" | "+heure+"</p>");
$("#ligne").append(res);
}
}
}

//Requêtes Json
$("#1").click(function(){
    var code=$("#1").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});

$("#2").click(function(){
    var code=$("#2").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});

$("#3").click(function(){
    var code=$("#3").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#4").click(function(){
    var code=$("#4").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#5").click(function(){
    var code=$("#5").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#6").click(function(){
    var code=$("#6").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#7").click(function(){
    var code=$("#7").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#8").click(function(){
    var code=$("#8").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#9").click(function(){
    var code=$("#9").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#10").click(function(){
    var code=$("#10").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
$("#11").click(function(){
    var code=$("#11").val();
	$.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?code="+code+"",null,afficheRes, "json");

});
