/*
document.getElementById('monbouton').onclick = function() {
  var nombre1 = parseInt(document.getElementByClass('touche').value);
  document.getElementById('resultat').value = nombre1 + nombre2;
};
*/
document.getElementById("egal").onclick = function egal() {
  var x= parseInt(document.getElementByClass("touche").value);
  var resultatFinal= eval(valeur);
  document.getElementById("resultat").value = valeur + "=" + resultatFinal;
}


function un() {
  var x= document.getElementById("un").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function deux() {
  var x= document.getElementById("deux").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function trois() {
  var x= document.getElementById("trois").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
 }

 function quatre() {
   var x= document.getElementById("quatre").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

 function cinq() {
   var x= document.getElementById("cinq").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

 function six() {
   var x= document.getElementById("six").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

 function sept() {
   var x= document.getElementById("sept").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

 function huit() {
   var x= document.getElementById("huit").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 };

 function neuf() {
   var x= document.getElementById("neuf").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

 function zero() {
   var x= document.getElementById("zero").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + x;
 }

function vir() {
  var x= document.getElementById("vir").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + x;
}

function plus() {
  var x= document.getElementById("plus").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + " " + x + " ";
}

function moins() {
  var x= document.getElementById("moins").value;
  var valeur= document.getElementById("resultat").value;
  document.getElementById("resultat").value = valeur + " " + x + " ";
}

 function div() {
   var x= document.getElementById("div").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + " " + x + " ";
 }

 function per() {
   var x= document.getElementById("per").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + " "  + x + " ";
 }

 function ix() {
   var x= document.getElementById("ix").value;
   var valeur= document.getElementById("resultat").value;
   document.getElementById("resultat").value = valeur + " " + x + " ";
 }

 document.getElementById("clear").onclick = function clear() {
   document.getElementById("resultat").value= "";
 }


/*
 function clear() {
   var valeur= document.getElementById("resultat").value;
   var longueur= valeur.length;
   var fin= longueur - 1;
   if(valeur.charAt(longueur - 1 == " ")) {
     valeur = valeur.substring(0, fin);
     document.getElementById("resultat").value = valeur;
   }
 }*/
