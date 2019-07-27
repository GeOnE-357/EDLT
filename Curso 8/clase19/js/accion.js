window.addEventListener("load", link, false);

function link()
	{
		var inp = document.getElementsByTagName("input");
		/*Se puede acceder al mismo input ya sea por su "posicion" o por su "name"
		
		inp[0].onfocus=validarNom;*/
		/* onfocus =Cuando estamos dentro del campo.*/
		/* onblur =Cuando salimos de adentro del campo.*/
		/* onchange = Cuando el campo recibe una modificacion, el evento se dispara.*/
		
		inp.nombre.onblur=validarNom;
		inp.numero.onchange=validarNum;
		inp.pass2.onblur=validarPass;

		function validarNom()
			{
				var nom=inp.nombre.value;
				if (nom.length<3 )
					{
						inp.nombre.style.border="solid red 2px";
						inp.nombre.style.backgroundColor="pink";
					}
				else
					{
						inp.nombre.style.border="solid green 2px";
						inp.nombre.style.backgroundColor="white";
					}	
			}

		function validarNum()
			{
				var num=inp.numero.value;
				if(num<1 || num>10)
					{
						inp.numero.style.border="solid red 2px";
						inp.numero.style.backgroundColor="pink";	
					}
				else
					{
						inp.numero.style.border="solid green 2px";
						inp.numero.style.backgroundColor="white";
					}
			}

		function validarPass()
			{
				var p1=inp.pass1.value;
				var p2=inp.pass2.value;
				if(p1!=p2)
					{
						inp.pass1.style.border="solid red 2px";
						inp.pass1.style.backgroundColor="pink";
						inp.pass2.style.border="solid red 2px";
						inp.pass2.style.backgroundColor="pink";	
					}
				else
					{
						inp.pass1.style.border="solid green 2px";
						inp.pass1.style.backgroundColor="white";
						inp.pass2.style.border="solid green 2px";
						inp.pass2.style.backgroundColor="white";	
					}

			}

	}