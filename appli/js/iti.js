function afficheRes(dataJSON) {
var res = $("#depart");
res.empty();
 for (var i=0 ; i < dataJSON.length ; i++) {
   var arret= dataJSON[i].stop_name;
   var ville= dataJSON[i].stop_desc;
res.append("<option value='"+arret+" ("+ville+")'/>");
$("#depart").append(res);
 }
}

function afficheResBis(dataJSON) {
var res = $("#arrivees");
res.empty();
 for (var i=0 ; i < dataJSON.length ; i++) {
   var arret= dataJSON[i].stop_name;
   var ville= dataJSON[i].stop_desc;
res.append("<option value='"+arret+" ("+ville+")'/>");
$("#arrivees").append(res);
 }
}

function cac(form1){
 var dep = $("#dep").val();
 var ar = $("#ar").val();
 var res = $("#calcul");
 res.append(dep+" "+ar);
 console.log(ar);
}

$("#dep").keyup(function(){
    var val = $("#dep").val();
 console.log(val);
 $.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?valeur="+val+"",null,afficheRes, "json"); // appel AJAX

});

$("#ar").keyup(function(){
    var val = $("#ar").val();
 console.log(val);
 $.get("http://vsp149406.nfrance.com/~16_dalla-nora/PHP_info/projet_commun/?valeur="+val+"",null,afficheResBis, "json"); // appel AJAX

});
