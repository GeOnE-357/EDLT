/*Utilizamos la palabra reservada "new", para CREAR un nuevo objeto. Y el tipo del objeto es "Date" osea FECHA*/
var fecha = new Date;
/*Para ver la hora en la que se creo el objeto.*/
console.log(fecha.getHours());
/*Para ver los minutos en la que se creo el objeto.*/
console.log(fecha.getMinutes());
/*Para ver los segundos en la que se creo el objeto.*/
console.log(fecha.getSeconds());
/*Para ver el dia en la que se creo el objeto.*/
console.log(fecha.getDay());
/*Para ver el mes en la que se creo el objeto.*/
console.log(fecha.getMonth());
/*Para ver el año en la que se creo el objeto.*/
console.log(fecha.getFullYear());

/*Para poder hacer que se se visualice el dia de manera escrita, debemos hacer un vector con dichos dias.*/
var dias =["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
/*Para poder hacer que se se visualice el mes de manera escrita, debemos hacer un vector con dichos meses.*/
var meses=["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log(dias[fecha.getDay()]);
console.log(meses[fecha.getMonth()]);

var tiempo=setInterval(horario,1000);

function horario()
	{
		fecha=new Date;
		hora=fecha.getHours();
		min=fecha.getMinutes();
		sec=fecha.getSeconds();
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
		var h1=document.getElementsByTagName("h1")[0];
		h1.innerHTML=hora+":"+min+":"+sec;		
	}

var h2=document.getElementsByTagName("h2")[0];
h2.innerHTML=dias[fecha.getDay()]+" "+fecha.getDate()+" de "+meses[fecha.getMonth()];