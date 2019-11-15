/*1- Traer el boton a javascript.*/
var boton=document.getElementsByTagName("button")[0];
/*2- Agregar el evento "click" y asignarle una funcion.*/
boton.onclick=aparecerSeccion;

/*3- Definir la funcion para que aparezca.*/
function aparecerSeccion()
	{
		var sec=document.getElementsByTagName("section")[0];
		sec.style.display="block";
	}

/*4- Definir otro evento.*/
boton.ondblclick=ocultarSeccion;

function ocultarSeccion()
	{
		var sec=document.getElementsByTagName("section")[0];
		sec.style.display="none";	
	}


/*Mismo evento de ocultar y mostrar, pero con solo 1 funcion.*/
var ban=false;
boton.onclick=mostrarOcultar;

function mostrarOcultar()
	{
		var sec=document.getElementsByTagName("section")[0];
		if(ban==false)
			{
				/*Si "ban" es falso, cambia a la seccion a "block".*/
				//sec.style.display="block";
				/*y la variable "ban" a "true"*/
				sec.className="visible";
				ban=true;
			}
		else
			{
				//sec.style.display="none";
				sec.className="";
				ban=false;	
			}
	}

/*Traer a la etiqueta <img>*/
var img=document.getElementsByTagName("img");
img[0].onmouseover=cambio;
img[1].onmouseout=cambio2;

function cambio()
	{
		/*img.src="img/gato2.jpg";*/
		img[0].className="desaparecer";
		img[1].className="aparecer gato2";	
	}

function cambio2()
	{
		/*img.src="img/gato.jpg";*/
		img[1].className="desaparecer gato2";
		img[0].className="aparecer";
	}