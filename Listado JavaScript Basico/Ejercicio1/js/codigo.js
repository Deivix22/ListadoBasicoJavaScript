//Variables
let numeroIntroducido;
let volverAJugar;

//Devuelve el numero aleatorio entre 0 a 100
let numeroRandom = function (min, max) {

  return Math.round(Math.random() * (max - min) + min);

}

//Comprueba si el numero del usuario es correcto o no
let comprobarNumero = function(num){

	if(num > numeroRandom(1,100))

		return "El número introducido es mayor";

	else if(num<numeroRandom(1,100))

		return "El número introducido es menor";
	
	return "Has acertado el número";

}

//Se repetira mientras el usuario introduzca "si"
do{

	volverAJugar = "";

	do{

		numeroIntroducido = prompt("Introduce un número entre 1 y 100");

	}while((numeroIntroducido < 0 || numeroIntroducido > 100) || isNaN(numeroIntroducido));

	alert(comprobarNumero(numeroIntroducido));

	volverAJugar = prompt("¿Quiere seguir jugando?");

}while(volverAJugar.toLowerCase()==="si");