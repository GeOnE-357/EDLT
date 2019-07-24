function principal()
	{
		var posicion=1;
		var inp=document.getElementsByTagName("input");
		inp.atr.onclick=atras;
		inp.ade.onclick=adelante;

		function atras()
			{
				if (posicion==1)
					{
						posicion=3;		
					}
				else
					{
						posicion=posicion-1;
					}
				
				img();
			}

		function adelante()
			{
				if (posicion==3)
					{
						posicion=1;		
					}
				else
					{
						posicion=posicion+1;
					}
				img();
			}

		function img()
			{
				var foto=document.getElementsByTagName("img")[0];
				if (posicion==1)
					{
						foto.src="img/01.jpg";

					}
				if (posicion==2)
					{
						foto.src="img/02.jpg";

					}
				if (posicion==3)
					{
						foto.src="img/03.jpg";

					}


			}
	}

window.addEventListener("load", principal, false);
