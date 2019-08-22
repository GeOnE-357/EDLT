window.addEventListener("load", principal, false);

function principal()
	{
		var num1 = 0;
		var num2 = 0;
		var op="";
		var inp = document.getElementsByTagName("input");
		inp.mas.onclick=function(){operacion("+");};
		inp.menos.onclick=function(){operacion("-");};
		inp.multi.onclick=function(){operacion("*");};
		inp.divi.onclick=function(){operacion("/");};
		inp.igual.onclick=igual;
		inp.c.onclick=borrar;
		inp.cero.onclick=function(){imprimir(0);};/*Todos los numeros enviar un valor por paramtero a la misma funcion.*/
		inp.uno.onclick=function(){imprimir(1);};
		inp.dos.onclick=function(){imprimir(2);};
		inp.tres.onclick=function(){imprimir(3);};
		inp.cuatro.onclick=function(){imprimir(4);};
		inp.cinco.onclick=function(){imprimir(5);};
		inp.seis.onclick=function(){imprimir(6);};
		inp.siete.onclick=function(){imprimir(7);};
		inp.ocho.onclick=function(){imprimir(8);};
		inp.nueve.onclick=function(){imprimir(9);};

		/*------------------ FUNCION QUE ENVIA SU VALOR A LA PANTALLA ------------------*/
		
		/*Solo utilizamos una funcion para imprimir los numeros, ya que, el proceso que realiza es siempre el mismo, solo cambia el numero que enviamos por parametro. */

		function imprimir(numero)
			{
				var valor=numero;
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
		
		function operacion(simbolo)
			{
				num1=parseInt(inp.resultado.value); /*parseInt() convierte en un numero entero al valor que se le envia.*/
				op=simbolo;
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