var ban = false; 
window.addEventListener("load", princi, false);

function princi()
	{
		var inp = document.getElementsByTagName("input");
		inp[0].onclick=cambiar2;
	}

function cambiar()
	{
		var sec =document.getElementById("color");
		var inp = document.getElementsByTagName("input");
		if(ban==false)
			{
				/*La seccion cambia a verde, y el boton a rojo*/
				sec.style.backgroundColor="green";
				inp[0].style.backgroundColor="red";
				inp[0].value="Rojo";
				ban=true;
			}
		else
			{
				/*La seccion cambia a rojo, y el boton a verder*/
				sec.style.backgroundColor="red";
				inp[0].style.backgroundColor="green";
				inp[0].value="Verde";
				ban=false;	
			}
	}

function cambiar2()
	{
		var sec =document.getElementById("color");
		var inp = document.getElementsByTagName("input");
		if(ban==false)
			{
				/*La seccion cambia a verde, y el boton a rojo*/
				sec.className="fondoVerde"
				inp[0].className="fondoRojo";
				inp[0].value="Rojo";
				ban=true;
			}
		else
			{
				/*La seccion cambia a rojo, y el boton a verder*/
				sec.className="";
				inp[0].className="";
				inp[0].value="Verde";
				ban=false;	
			}
	}