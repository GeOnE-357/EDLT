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
		var nombre=false;
		var numero=false;
		var password=false;

		function validarNom()
			{
				var nom=inp.nombre.value;
				if (nom.length<3 )
					{
						/*Respuesta Negativa*/
						inp.nombre.style.border="solid red 2px";
						inp.nombre.style.backgroundColor="pink";
						nombre=false;
					}
				else
					{
						/*Respuesta Positiva*/
						inp.nombre.style.border="solid green 2px";
						inp.nombre.style.backgroundColor="white";
						nombre=true;
					}	
			}

		function validarNum()
			{
				var num=inp.numero.value;
				if(num<1 || num>10)
					{
						/*Respuesta negativa*/
						inp.numero.style.border="solid red 2px";
						inp.numero.style.backgroundColor="pink";	
						numero=false;
					}
				else
					{
						/*Respuesta positiva*/
						inp.numero.style.border="solid green 2px";
						inp.numero.style.backgroundColor="white";
						numero=true;
					}
			}

		function validarPass()
			{
				var p1=inp.pass1.value;
				var p2=inp.pass2.value;
				if(p1!=p2 || p1=="")
					{
						/*Respuesta negativa*/
						inp.pass1.style.border="solid red 2px";
						inp.pass1.style.backgroundColor="pink";
						inp.pass2.style.border="solid red 2px";
						inp.pass2.style.backgroundColor="pink";	
						password=false;
					}
				else
					{
						/*Respuesta Positiva*/
						inp.pass1.style.border="solid green 2px";
						inp.pass1.style.backgroundColor="white";
						inp.pass2.style.border="solid green 2px";
						inp.pass2.style.backgroundColor="white";
						password=true;
					}
			}

		var formu=document.getElementsByTagName("form")[0];
		formu.onsubmit=enviarInfo;

		function enviarInfo()
			{	
				validarNom();
				validarNum();
				validarPass();
				if(nombre==false || numero==false || password==false)
					{
						/*Previene el evento que esta sucediendo, en ese caso, el submit.*/
						event.preventDefault();
						alert("Falta completar algun campo o no es correcto.");
					}
			}
	}