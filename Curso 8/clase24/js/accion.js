window.addEventListener("load", principal, false);

function principal()
	{
		var num1 = 0;
		var num2 = 0;
		var op="";
		var inp = document.getElementsByTagName("input");
		inp.mas.onclick=suma;
		inp.menos.onclick=resta;
		inp.multi.onclick=multi;
		inp.divi.onclick=divi;
		inp.igual.onclick=igual;
		inp.c.onclick=borrar;
		inp.cero.onclick=cero;
		inp.uno.onclick=uno;
		inp.dos.onclick=dos;
		inp.tres.onclick=tres;
		inp.cuatro.onclick=cuatro;
		inp.cinco.onclick=cinco;
		inp.seis.onclick=seis;
		inp.siete.onclick=siete;
		inp.ocho.onclick=ocho;
		inp.nueve.onclick=nueve;

		/*------------------ FUNCIONES QUE ENVIAN SU VALOR A LA PANTALLA ------------------*/
		function cero()
			{
				var valor=inp.cero.value;
				inp.resultado.value+=valor;

			}

		function uno()
			{
				var valor=inp.uno.value;
				inp.resultado.value+=valor;

			}

		function dos()
			{
				var valor=inp.dos.value;
				inp.resultado.value+=valor;

			}

		function tres()
			{
				var valor=inp.tres.value;
				inp.resultado.value+=valor;

			}

		function cuatro()
			{
				var valor=inp.cuatro.value;
				inp.resultado.value+=valor;

			}

		function cinco()
			{
				var valor=inp.cinco.value;
				inp.resultado.value+=valor;

			}

		function seis()
			{
				var valor=inp.seis.value;
				inp.resultado.value+=valor;

			}

		function siete()
			{
				var valor=inp.siete.value;
				inp.resultado.value+=valor;

			}

		function ocho()
			{
				var valor=inp.ocho.value;
				inp.resultado.value+=valor;

			}

		function nueve()
			{
				var valor=inp.nueve.value;
				inp.resultado.value+=valor;

			}

		/*------------------ FUNCIONE QUE BORRA TODOS LOS VALORES IMPRESOS Y GUARDADOS. ------------------*/

		function borrar()
			{
				num1=0;
				num2=0;
				op="";
				inp.resultado.value="";
				inp.cuenta.value="";
			}

		/*------------------ FUNCIONES QUE GUARDAN EL PRIMER VALOR Y DEFINEN LA OPERACION ------------------*/
		function suma()
			{
				num1=parseInt(inp.resultado.value); /*parseInt() convierte en un numero entero al valor que se le envia.*/
				op="+";
				inp.resultado.value="";
				inp.cuenta.value+=num1;
				inp.cuenta.value+=op;
			}

		function resta()
			{
				num1=parseInt(inp.resultado.value);
				op="-";
				inp.resultado.value="";
				inp.cuenta.value+=num1;
				inp.cuenta.value+=op;
			}

		function multi()
			{
				num1=parseInt(inp.resultado.value);
				op="*";
				inp.resultado.value="";
				inp.cuenta.value+=num1;
				inp.cuenta.value+=op;
			}

		function divi()
			{
				num1=parseInt(inp.resultado.value);
				op="/";
				inp.resultado.value="";
				inp.cuenta.value+=num1;
				inp.cuenta.value+=op;
			}

		
		/*------------------ FUNCIONES QUE GUARDAN EL SEGUNDO VALOR Y DEFINEN EL RESULTADO ------------------*/
		
		function igual()
			{
				num2=parseInt(inp.resultado.value);
				inp.resultado.value="";
				inp.cuenta.value+=num2;
				resultado();/*llama a la funcion "resultado".*/
			}

		function resultado()
			{
				if(op=="+")
					{
						inp.resultado.value=num1+num2;
					}
				
				if(op=="-")
					{
						inp.resultado.value=num1-num2;
					}

				if(op=="*")
					{
						inp.resultado.value=num1*num2;	
					}

				if(op=="/")
					{
						inp.resultado.value=num1/num2;	
					}
				num1=0;
				num2=0;
				op="";
			}
	}