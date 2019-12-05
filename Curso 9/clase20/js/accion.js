var pantalla=document.getElementsByClassName("ope")[0];
var nums=document.getElementsByClassName("num");
var acciones=document.getElementsByClassName("acc");
var num1, num2, ope;
//for(i=0; i<nums.length; i++)
//	{
//		var num=nums[i].firstChild.innerHTML;
//		console.log(num);
//		nums[i].onclick=function(){escribir();};
//	}

nums[0].onclick=function(){escribir(1);};
nums[1].onclick=function(){escribir(2);};
nums[2].onclick=function(){escribir(3);};
nums[3].onclick=function(){escribir(4);};
nums[4].onclick=function(){escribir(5);};
nums[5].onclick=function(){escribir(6);};
nums[6].onclick=function(){escribir(7);};
nums[7].onclick=function(){escribir(8);};
nums[8].onclick=function(){escribir(9);};
nums[9].onclick=function(){escribir(0);};

acciones[0].onclick=function(){operacion("+");};
acciones[1].onclick=function(){operacion("-");};
acciones[2].onclick=function(){operacion("*");};
acciones[3].onclick=function(){operacion("/");};
acciones[4].onclick=resultado;
acciones[5].onclick=resetear;

/*La funcion recibe el numero u operacion y lo escribe por pantalla.*/
function escribir(num)
	{
		pantalla.firstChild.innerHTML+=num;
	}

function operacion(op)
	{
		num1=parseInt(pantalla.firstChild.innerHTML);
		ope=op;
		pantalla.firstChild.innerHTML="";
	}

function resultado()
	{
		num2=parseInt(pantalla.firstChild.innerHTML);
		if(ope=="+")
			{
				pantalla.firstChild.innerHTML=num1+num2;
			}
		if(ope=="-")
			{
				pantalla.firstChild.innerHTML=num1-num2;
			}
		if(ope=="*")
			{
				pantalla.firstChild.innerHTML=num1*num2;
			}
		if(ope=="/")
			{
				pantalla.firstChild.innerHTML=num1/num2;
			}
	}

function resetear()
	{
		num1=0;
		num2=0;
		ope="";
		pantalla.firstChild.innerHTML="";
	}