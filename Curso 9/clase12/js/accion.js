/*document.getElementsByTagName(); -> consigue los ELEMENTOS por su nombre de etiqueta.*/
/*document.getElementsByClassName(); -> consigue los ELEMENTOS por su nombre de clase. no importa si no son la misma etiqueta. */
var clase = document.getElementsByClassName("lalala");
/*Las colecciones empiesan la cuenta de sus elementos por la posicion 0.*/
clase[0].innerHTML="<p>Escribi el parrafo en Javascript</p>";

/*document.getElementById(); -> consigue solo UN ELEMENTO por su nombre de id.*/
var iden= document.getElementById("unico");
/*No hace falta definir en que posicion esta, ya que trae solo 1.*/
iden.innerHTML="<p>Modifique este elemento sin definir la posicion.</p>"


var body = document.getElementsByTagName("body");
/*Creamos una <seccion>*/
var sec=document.createElement("section");
/*Creamos un <h2>*/
var h2=document.createElement("h2");
/*Modificamos el contenido del <h2>*/
h2.innerHTML="Este es un titulo creado en javascript.";
/* Colocamos el <h2> dentro de la <section>.*/
sec.append(h2);
/* Colocamos a la <section> dentro del <body>.*/
body[0].append(sec);
/*Cololamos a la <section> dentro de la primer <section> del HTML.*/
//clase[1].append(sec);