/* Creamos una variable de tipo entero.*/
var num1 = 1;
/*Creamos una variable de tipo flotante.*/
var num2 = 0.85;
/*Creamos una variable vacia.*/
var vacia;
/*Creamos una variable con una cadena de texto.*/
var nom="Emilio";
/*Creamos una variable con un booleano. true/false.*/
var bol=true;

/*Funcion alert(), y asi como las variables se llama por su nombre, y recibe un parametro entre los parentesis.*/
//alert("HOLA SOY UNA ALERTA MOLESTA!");
//alert(nom);
//alert(2+3*7);

/*console.log() esta funcion envia un mensaje por medio de la consola.*/
console.log("Hola, soy un mensaje ninja!");
console.log(bol);

/*document.write() Escribimos sobre el documento, el HTML.*/
document.write("<h2>Hola! soy el mensaje de javascript!</h2>");

/*para llamar a una etiqueta existente en el HTML, por su nombre de etiqueta, se puede usar... document.getElementsByTagName();*/
var vector=document.getElementsByTagName("h1");
/*Llamamos a toda la coleccion.*/
console.log(vector);
/*Llamamos esclusivamente al primer elemento de la coleccion.*/
console.log(vector[0]);
/*Llamamos al segundo elemento de la coleccion.*/
console.log(vector[1]);

/*.innerHTML="" editar el contenido de una etiqueta html.*/
vector[0].innerHTML="Mira, cambie el titulo.";
vector[1].innerHTML="y tambien cambio el segundo."

var vector2 = document.getElementsByTagName("header");
vector2[0].innerHTML=nom;