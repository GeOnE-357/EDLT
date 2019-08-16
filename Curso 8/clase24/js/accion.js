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

		function suma()
			{
				num1=inp.resultado.value;
				op="+";
				alert(num1);
				alert(op);
				inp.resultado.value="";
			}

		function resta()
			{
				num1=inp.resultado.value;
				op="-";
				alert(num1);
				alert(op);
				inp.resultado.value="";
			}

		function multi()
			{
				num1=inp.resultado.value;
				op="*";
				alert(num1);
				alert(op);
				inp.resultado.value="";
			}

		function divi()
			{
				num1=inp.resultado.value;
				op="/";
				alert(num1);
				alert(op);
				inp.resultado.value="";
			}

		function igual()
			{
				num2=inp.resultado.value;
				alert(num2);
				inp.resultado.value="";
				resultado();/*llama a la funcion "resultado".*/
			}

		function resultado()
			{
				if(op=="+")
					{
						inp.resultado.value=parseInt(num1)+parseInt(num2);
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