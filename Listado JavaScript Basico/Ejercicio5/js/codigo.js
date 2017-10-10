//Variables
let num;
let contador = 0;

//Calcula si el numero introducido es primo
let calcularPrimos = function(num){

   	let primo = 0;

	for(let i = 0; i <= num; i++){

    	if(num%i == 0)

        	primo++;

 	}

 	    if(primo==2)

 			return true;

	  		return false;	
}

//Pide un numero y se repite si se introduce una letra
do{

	num = prompt("Introduce un número");

}while(isNaN(num));

//Recorremos los numeros desde el 1 hasta el numero introducido
for(let i = 1; i <= num; i++){

	if(calcularPrimos(i))

		contador++;

}

//Se muestran los numeros
document.writeln("Existen "+contador+" numeros primos en el rango indicado");