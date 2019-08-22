/*Creamos la variable del contador.*/
var cont=10;
/*Definimos a tiempo como una variable global*/
var tiempo;
var inp = document.getElementsByTagName("input");
/*Lleva primero el nombre de la funcion a ejecutar, y el tiempo en milisegundos.*/
inp[0].onclick=function(){tiempo=setInterval(contador,1000);}; /*Le damos a tiempo un intervalo.*/

function mensaje()
	{
		var p = document.createElement("p");
		p.innerHTML="Hola";
		var body=document.getElementsByTagName("body")[0];
		body.appendChild(p);
	}

/*La funcion que inicia y disminuye de uno en uno el valor de contador y lo muestra en el h1.*/
function contador()
	{
		var titulo=document.getElementsByTagName("h1");
		if(cont>0)
			{
				cont-=1;
				titulo[0].innerHTML=cont;		
			}
		else
			{
				titulo[0].innerHTML="Se te acabo el tiempo.";
				clearTimeout(tiempo);/*Eliminamos el intervalo de tiempo.*/
				console.log("No esta funcionando.")	
			}
		
	}