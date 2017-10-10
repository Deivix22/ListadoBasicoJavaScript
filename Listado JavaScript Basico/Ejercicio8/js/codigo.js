//Variables
let mes, anio, dia;

//Comprueba la fecha segun los parametros
let comprobarFecha = function(mes,anio, dia){
	if(anio<0)

		return "Fecha incorrecta";

	if(mes>12||mes<1)

		return "Fecha incorrecta";

	if(dia<=31)

		switch(mes){

			case 4:

			case 6:

			case 9:

			case 11:

				if(dia>30)

					return "Fecha incorrecta";

				break;

			case 2:

				if(dia>28)

					return "Fecha incorrecta";

				break;

			default: 

				return "Fecha correcta";

				break;
		}
	
	return "Fecha incorrecta";
}

// Se piden los datos
do{

	anio = prompt("Introduce el año");

}while(isNaN(anio));

do{

	mes = prompt("Introduce el mes");

}while(isNaN(mes));

do{

	dia = prompt("Introduce el dia");

}while(isNaN(dia));

alert(comprobarFecha(mes, anio, dia));