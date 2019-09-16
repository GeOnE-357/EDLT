var dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
var days=["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"];
var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var h1=document.getElementsByTagName("h1");
var h2=document.getElementsByTagName("h2");
var h3=document.getElementsByTagName("h3");

var tiempo=setInterval(hora,1000);

function hora()
	{
		var fecha = new Date; /*Con la sintaxis "new" creamos un nuevo objeto "Date"( un objeto fecha.)*/		
		/*Horas*/
		h1[0].innerHTML=fecha.getHours();
		if(fecha.getMinutes()<10)
			{
				h1[2].innerHTML="0"+fecha.getMinutes();		
			}
			else
				{
					h1[2].innerHTML=fecha.getMinutes();		
				}
		
		/*Fechas*/
		h3[0].innerHTML=dias[fecha.getDay()];
		h3[1].innerHTML=fecha.getDate();
		h3[1].innerHTML=fecha.getDate();
		h3[3].innerHTML=meses[fecha.getMonth()];
		/*Años*/
		h2[0].innerHTML=fecha.getFullYear();		
	}