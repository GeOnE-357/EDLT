



var num=100;
var num2=0;

var tiempo=setInterval(numero,500);
var tiempo2=setInterval(numero2,1000);

function numero()
	{
		h2=document.getElementById("numero");
		h2.onclick=parartiempo;
		h2.innerHTML=num;
		if(num==0)
			{
				clearInterval(tiempo);
			}
		num-=5; 	
	}

function numero2()
	{
		h2=document.getElementById("numero2");
		h2.onclick=parartiempo2;
		h2.innerHTML=num2;
		if(num2==120)
			{
			    clearInterval(tiempo2);	
			}
		num2+=12;
	}

function parartiempo()
	{
		clearInterval(tiempo);
		h2=document.getElementById("numero");
		h2.onclick=continuartiempo;
	}

function continuartiempo()
	{
		tiempo=setInterval(numero,500);
	}

function parartiempo2()
	{
		clearInterval(tiempo2);	
	}

var tiempo3=setTimeout(mensaje,5000);
var sec=document.getElementsByTagName("section")[1];
sec.onclick=parartiempo3;

function mensaje()
	{
		h2=document.getElementById("numero3");
		h2.innerHTML="Hola! soy TimeOut!";
	}

function parartiempo3()
	{
		clearTimeout(tiempo3);
	}