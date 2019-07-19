

/*Traemos a la imagen por su nombre de etiqueta.*/
var img=document.getElementsByTagName("img");

/*Le agregamos el escuchador de eventos para cuando "pasamos el mouse por encima" = "mouseover"*/
img[0].addEventListener("mouseover",mostrarP,false);


/*Creamos la funcion "mostrarP"*/
function mostrarP()
	{
		/*Traemos un solo elemento por su "id" unico.*/
		var texto=document.getElementById("texto1");
		/*Cambiamos el parrafo para que se vea como una "linea-bloque"*/
		texto.style.display="inline-block";
		/*Cambiamos el color de la fuente a rojo.*/
		texto.style.color="red";
		/*Cambiamos el color de fondo a amarillo.*/
		texto.style.backgroundColor="yellow";
	}

/*Le agregamos el escuchador de eventos para cuando "sacamos el mouse de encima" = "mouseout"*/
img[0].addEventListener("mouseout",ocultarP,false);

function ocultarP()
	{
		/*Traemos un solo elemento por su "id" unico.*/
		var texto=document.getElementById("texto1");
		/*Cambiamos el parrafo para que no se vea, con "none"*/
		texto.style.display="none";
	}

/*Le agregamos el escuchador de eventos para cuando "hacemos click" = "click"*/
img[0].addEventListener("click",tamañoF,false);

function tamañoF()
	{
		/*Traemos un solo elemento por su "id" unico.*/
		var texto=document.getElementById("texto1");
		/*Cambiamos el tamaño de la fuente.*/
		texto.style.fontSize="3em";	
	}

/*Le agregamos el escuchador de eventos para cuando "hacemos doble click" = "dblclick"*/
img[0].addEventListener("dblclick",tamañoF2,false);

function tamañoF2()
	{
		/*Traemos un solo elemento por su "id" unico.*/
		var texto=document.getElementById("texto1");
		/*Cambiamos el tamaño de la fuente.*/
		texto.style.fontSize="1em";	
	}


var inp=document.getElementsByTagName("input");
inp.enviar.addEventListener("click", mostrarTexto,false);

function mostrarTexto()
	{
		var a=inp.texto.value;
		alert(a);
	}


