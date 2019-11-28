var h2 = document.getElementsByTagName("h2")[0];
var h3 = document.getElementsByTagName("h3")[0];
var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
setInterval(hora,1000);

function hora()
	{
		var fecha = new Date;
		var hora=fecha.getHours();
		var min=fecha.getMinutes();
		var sec=fecha.getSeconds();
		var dia=dias[fecha.getDay()];
		var mes=meses[fecha.getMonth()];
		var num=fecha.getDate();
		if(hora<10)
			{
				hora="0"+hora;
			}
		if(min<10)
			{
				min="0"+min;
			}
		if(sec<10)
			{
				sec="0"+sec;
			}
		h2.innerHTML=hora+":"+min+":"+sec;
		h3.innerHTML=dia+" "+num+" de "+mes;
	}


