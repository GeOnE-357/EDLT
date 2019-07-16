/*Traemos al boton a javascript.*/
var boton= document.getElementsByTagName("input");
/*Agregamos el escuchador de eventos al boton.*/
boton[0].addEventListener("click",cargarDatos,false);
/*Crear la funcion "cargarDatos" y ejecutarla.*/

function cargarDatos()
	{
		/*------ 1° paso - pedir datos. ------*/

		/*Pedimos al usuario que ingrese su nombre y lo guardamos en la variable "nom".*/
		var nom=prompt("Escriba su nombre:");
		/*Pedimos al usuario que ingrese su edad y lo guardamos en la variable "edad".*/
		var edad=prompt("Escriba su edad:");

		/*------ 2° paso - crear las etiquetas necesarias. ------*/
		
		/*Crear el primer <td>*/
		var td1=document.createElement("td");
		/*Vamos a guardar el nombre dentro del primer <td>*/
		td1.innerHTML=nom;

		/*Crear el segundo <td>*/
		var td2=document.createElement("td");
		/*Vamos a guardar el edad dentro del segundo <td>*/
		td2.innerHTML=edad;

		/*Crear el tercer <td>*/
		var td3=document.createElement("td");
		/*Preguntar si es menor o mayor a 18.*/
		if(edad>=18)
			{
				td3.innerHTML="Mayor";
			}
		if(edad<18)
			{
				td3.innerHTML="Menor";
			}

		/*Crear la etiqueta de fila <tr>*/
		var tr=document.createElement("tr");
		/*Agregar al primer hijo, el td1*/
		tr.appendChild(td1);
		/*Agregar al segundo hijo, el td2*/
		tr.appendChild(td2);
		/*Agregar al tercer hijo, el td3*/
		tr.appendChild(td3);


		/*3° paso - Llamar a la etiqueta correspondiente y colocar los elementos en el HTML.*/

		/*Llamamos a la etiqueta <tbody>*/
		var tbody=document.getElementsByTagName("tbody");
		/*Agregar a tr como hijo.*/
		tbody[0].appendChild(tr);
	}