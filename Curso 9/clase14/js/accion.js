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