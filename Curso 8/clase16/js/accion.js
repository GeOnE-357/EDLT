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
	}