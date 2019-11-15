var img=document.getElementsByTagName("img");

img[0].onclick=function(){ocultar(0);};
img[1].onclick=function(){ocultar(1);};
img[2].onclick=function(){ocultar(2);};
img[3].onclick=function(){ocultar(3);};
img[4].onclick=function(){ocultar(4);};
img[5].onclick=function(){ocultar(5);};

function ocultar(pos)
	{
		img[pos].className="oculto";
		img[pos+1].className="";
	}