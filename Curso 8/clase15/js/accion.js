/*Trae a todos los elementos llamados <h2>*/
var h2= document.getElementsByTagName("h2");
/*Modificamos el elemento de la posicion 0, osea, el primer <h2>.*/
h2[0].innerHTML="Acabo de cambiar el titulo con javascript, y no te diste cuenta.";

/*Trae el tercer elemento <h2> solamente.*/
var h2b= document.getElementsByTagName("h2")[2];
/*Como no es un vector, no hace falta especificar posicion para modificarlo.*/
h2b.innerHTML="Acabo de cambiar este tambien!";

/*Creamos una ventana que muestra el mensaje definido entre parentesis y guarda el valor que enviamos nosotros.*/
var palabra=prompt("Cual es tu nombre?");

h2[1].innerHTML=palabra;

/*Traemos al javascript, solo la primer seccion.*/
var sec= document.getElementsByTagName("section")[0];
/*Modificamos especificamente el segundo hijo de la etiqueta <section>.*/
sec.children[1].innerHTML="Acabo de cambiar el parrafo.";
/**/
sec.children.parra.innerHTML="Lo cambie de nuevo!!!JA!!";


/*------- Respuesta del ejercicio -------*/

/*1°Que vamos a crear?*/
var secti=document.createElement("section");
var titu=document.createElement("h2");
var para=document.createElement("p");
/*2°Que van a tener?*/
titu.innerHTML="Titulo en javascript";
para.innerHTML="parrafo en javascript";
/*3°Donde van entre si?*/
secti.appendChild(titu);
secti.appendChild(para);
/*4° Donde lo enviamos en el HTML?*/
bod=document.getElementsByTagName("body");
/*5° Agregarlo al elemento del HTML*/
bod[0].appendChild(secti);
