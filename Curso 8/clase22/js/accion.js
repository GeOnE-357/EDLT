window.addEventListener("load", princi , false);

function princi()
	{
		var inp=document.getElementsByTagName("input");
		inp.boton.onclick=copiarDatos;

		function copiarDatos()
			{
				/*La variable inp, es global para la funcion copiarDatos.*/
				console.log(inp);
				var nom=inp.nombre.value;
				var ape=inp.apellido.value;
				var mail=inp.mail.value;
				/*          0  , 1 , 2 */
				var datos=[nom,ape,mail];
				/*Es necesario crear antes el <tr>, fuera del ciclo, para que este pueda guardar cada uno de los datos del ciclo.*/
				var tr=document.createElement("tr");
				for(i=0; i<datos.length; i++)
					{
						var td=document.createElement("td");
						td.innerHTML=datos[i];
						tr.appendChild(td);
					}
				var tbody=document.getElementsByTagName("tbody");
				tbody[0].appendChild(tr);
				/*
				En esta version, traemos solo el primer elemento. Ya no es un vector como en el caso anterior. 
				var tbody=document.getElementsByTagName("tbody")[0];
				tbody.appendChild(tr);
				*/
			}

	}


function copiarDatos2()
	{
		/*La variable inp es inaccesible, porque es una variable local de la funcion princi.*/
		console.log(inp);
	}

