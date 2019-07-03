var numero = 2;
/*Crear elemento <h1>*/
var h1 = document.createElement("h1");
/*Modificar contenido de <h1>*/
h1.innerHTML="HOLA!!!";
/*Llamar al elemento <body> del documento.*/
var body = document.getElementsByTagName("body");/*la variable body es un vector, una coleccion de varios elementos, que empieza su cuenta desde la posicion 0.*/
/*Agregar el elemento <h1> dentro del elemento <body>*/
body[0].appendChild(h1);/*colocamos a la variable h1 dentro de la etiqueta <body>*/

/*1° Crear el elemento.*/
var parra = document.createElement("p");
/*2° Crear el contenido del elemento.*/
parra.innerHTML="Este es un parrafo, lorem volve!!! :'(";
/*3° Llamar al contenedor del HTML.*/
var body=document.getElementsByTagName("body");
/*4° Poner el elemento dentro del contenedor.*/
body[0].appendChild(parra);

console.log("La accion que quiere realizar no esta permitida!");/*Con esta funcion enviamos mensajes por consola.*/
console.log(body);

alert("Te molestas?"); /*Mensaje de pop up que frena todas las acciones de javascript hasta que haces click en aceptar.*/
confirm("Estas seguro?"); /*Igual que el anterior, pero con las opciones cancelar y aceptar.*/
