function jugar()
	{
		if(this.energia>0)
			{
				this.energia-=2;
				this.hambre+=2;
				console.log(this.nombre+" rueda por la escalera.");
			}
		else
			{
				console.log(this.nombre+" Esta tirado sin moverse.");
			}
	}

function comer()
	{
		if(this.hambre>0)
			{
				this.energia+=2;
				this.hambre-=2;
				console.log(this.nombre+" come como condenade.");
			}
		else
			{
				console.log(this.nombre+" esta redonde como pelota!");
			}
	}


function Gato(color,raza,genero,nombre,edad)
	{
		/*Todos estos datos son ingresados por el usuario a travez de parametros.*/
		this.color=color;
		this.raza=raza;
		this.genero=genero;
		this.nombre=nombre;
		this.edad=edad;
		this.energia=10; /*Predefinimos que todos los gatos tengan 10 de energia.*/
		this.hambre=0; /*Predefinimos que todos los gatos tengan 0 de hambre.*/
		this.hablar=hablar;
		this.jugar=jugar;
		this.comer=comer;
		function hablar()
			{
				console.log(this.nombre+": Miiiiaaauuuu!!!");
			}
	}

var gato1=new Gato("Naranja", "Siames","Macho", "Michi", "32");
var gato2=new Gato("Gris","Calle", "Hembra", "Michina", "12");

function Perro(color,raza,genero,nombre,edad)
	{
		/*Todos estos datos son ingresados por el usuario a travez de parametros.*/
		this.color=color;
		this.raza=raza;
		this.genero=genero;
		this.nombre=nombre;
		this.edad=edad;
		this.energia=10; /*Predefinimos que todos los gatos tengan 10 de energia.*/
		this.hambre=0; /*Predefinimos que todos los gatos tengan 0 de hambre.*/
		this.hablar=hablar;
		this.jugar=jugar;
		this.comer=comer;
		function hablar()
			{
				console.log(this.nombre+": Guuuaaa!");
			}
	}

var perro1=new Perro("Marron", "Pitbull","Macho", "Pom", "5");
var perro2=new Perro("Gris","Calle", "Hembra", "Morena", "7");