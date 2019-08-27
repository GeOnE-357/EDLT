var dias=["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
var days=["sunday", "monday","tuesday","wednesday","thursday","friday","saturday"];
var meses=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var h2=document.getElementsByTagName("h2");

var tiempo=setInterval(hora,1000);

function hora()
	{
		var fecha = new Date; /*Con la sintaxis "new" creamos un nuevo objeto "Date"( un objeto fecha.)*/		
		h2[0].innerHTML=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
		h2[1].innerHTML=dias[fecha.getDay()];
		h2[2].innerHTML=meses[fecha.getMonth()];
		h2[3].innerHTML=fecha.getFullYear();		
	}
