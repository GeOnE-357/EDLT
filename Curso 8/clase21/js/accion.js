var vect1=["Emilio","Juan","David","Laura"];
var cantidad=12;

/*Ciclo for()*/
/*"i=0" inicializamos la variable que define en que ciclo estamos situados.*/
/*"i<4 o i<cantidad o i<vect1.length, define la condicion que termina con el ciclo."*/
/*"i++ o i+=1 o i=i+1" define la modificacion de la variable para poder llegar a la condicion de terminar el ciclo.*/
for(i=0; i<vect1.length; i++)
	{
		console.log(vect1[i]);
	}

/*Ciclo for de EMACscript*/
for(a in vect1)
	{
		console.log(vect1[a]);
	}


/* ---------------  acciones con el formulario --------------- */

window.addEventListener("load", principal, false);

function principal()
	{
		/*Traemos el HTML todos los input y los guardamos en la variable.*/
		var inp=document.getElementsByTagName("input");
		inp.boton.onclick=copiarDatos;

		function copiarDatos()
			{
				/*Guardar los datos de los input*/
				var texto=inp.texto.value;
				var num=inp.numero.value;
				/*Traemos a la <section> por su id*/
				var sec = document.getElementById("cont");
				
				for(i=1; i<=num; i++)
					{
						/*Crear la etiqueta <p>*/
						var p=document.createElement("p");
						/*Poner el texto dentro de la etiqueta <p>*/
						p.innerHTML=texto+" "+i;
						/*Colocamos dentro de la <section> la etiqueta <p>*/
						sec.appendChild(p);		
					}
				
			}
	}