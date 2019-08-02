/* ------------------- CICLO FOR BUSCANDO PARES E INPARES ------------------- */
/*For se utiliza para realizar un accion una X cantidad o navegar un vector.*/
for(i=0; i<5; i++)
	{
		if(i%2==0)
			{
				/*Si el resto de la division es 0, entonces es par.*/
				console.log(i+" es par.");
			}
		else
			{
				/*Sino, es impar.*/
				console.log(i+" es inpar.");
			}
	}

/* ------------------- CICLO FOR CREANDO PARRAFOS AGREGANDO CARACTERISTICAS Y FUNCIONES ------------------- */

for(i=0; i<12; i+=10)
	{
		var p = document.createElement("p");
		p.innerHTML="Este es un parrafo creado con javascript en un ciclo, este es el ciclo "+i+".";
		if(i%2==0)
			{
				/*Si el resto de la division es 0, entonces es par.*/
				p.onclick=nombreP;
				p.style.backgroundColor="red";	
			}
		else
			{
				/*Sino, es impar.*/
				p.onclick=chauP;
				p.style.backgroundColor="green";
			}
		var body=document.getElementsByTagName("body")[0];
		body.append(p);

	}

function nombreP()
	{
		alert("Hola! soy el parrafo!!!");
	}

function chauP()
	{
		alert("Chau! soy el parrafo!!!");	
	}

/* ------------------- CICLO FOR NAVEGANDO VECTOR ------------------- */

var nom="David";
var vect1 = [1,1.2,"Emilio",12, nom,"Emilio"];

console.log(vect1);

for(i=0; i<vect1.length; i++)
	{
		console.log(vect1[i]);
		if (vect1[i]=="Emilio")
			{
				alert("Emilio esta en la posición "+i+".")
			}
	}