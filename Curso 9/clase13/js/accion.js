
var h3 = document.getElementsByTagName("h3");
console.log(h3[0]);

/*Agregar evento click, y definirle una funcion.*/

h3[0].ondblclick=original;

h3[0].onclick=cambio;

/*Una funcion es una serie de pasos pre definidos,
que se activan cada vez que se las llama por su nombre.*/

/*function, define que se crea una funcion.
alerta es el nombre de la funcion.
los () son para recibir un valor, de afuera de la funcion.
Los contendios de las funciones, son privados para Javascript.*/

function alerta ()
	{
		/*Creamos la etiqueta <p>*/
		var parra= document.createElement("p");
		/*Agregamos contenido dentro de la etiqueta <p>*/
		parra.innerHTML="Mira! soy un parrafo!";
		/*Llamamos a la etiqueta <body> del HTML.*/
		var body=document.getElementsByTagName("body");
		/*Agregamos a <p> dentro de <body>*/
		body[0].append(parra);
	}

function cambio ()
	{
		/*Cambiamos el texto del boton <h3>.*/
		h3[0].innerHTML="Acabo de cambiar!";
		/*Agregamos el atributo style a la etiqueta.*/
		h3[0].style.backgroundColor="green"; 
	}

function original()
	{
		h3[0].innerHTML="Hace click!";
		h3[0].style.backgroundColor="";
		h3[0].className="azul"; 	
	}