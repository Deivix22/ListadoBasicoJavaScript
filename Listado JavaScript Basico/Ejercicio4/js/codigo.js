let numPrimo;

//Calcula si el numero introducido es primo
let calcularPrimos = function(){

	let num = document.getElementById("numero").value;
   	let primo = 0;

	for(let i = 0; i <= num; i++){

    	if(num%i == 0)

        	primo++;

 	}

 	if(primo == 2){
 		document.writeln("Es primo");
 	}else{
 		document.writeln("No es primo");
 	}
	  	
}
