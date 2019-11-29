var h2 = document.getElementsByTagName("h2")[0];
var h3 = document.getElementsByTagName("h3")[0];
var dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
setInterval(hora,1000);
var pmam=false;

var boton=document.getElementsByTagName("button");
boton[0].onclick=function(){pmam=true;};
boton[1].onclick=function(){pmam=false;};

function hora()
	{
		var fecha = new Date;
		var hora=fecha.getHours();
		var min=fecha.getMinutes();
		var sec=fecha.getSeconds();
		var dia=dias[fecha.getDay()];
		var mes=meses[fecha.getMonth()];
		var num=fecha.getDate();
		var tiempo="AM";
		if(hora>=12)
			{	
				tiempo="PM";
			}
		if(pmam==true)
			{
				if(hora>12)
					{
						hora=hora-12;
					}
			}
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
		if(pmam==true)
			{
				h2.innerHTML+=" "+tiempo;
				h2.className="PmAm";
			}
		else
			{
				h2.className="";	
			}
		h3.innerHTML=dia+" "+num+" de "+mes;
	}







