//Variables
let multiplos = new Array;
let nums = new Array;

//Comprueba si el numero pasado por parametro es multimo de 5
let comprobarMultiplo = function(num){

	if(num!=0)

		if(num%5==0)

			return true;
	
	return false;

}

//Pide 7 nums y muestra los que sean multiplos de 5
for(let i = 0; i < 7; i++){

	do{

		nums[i] = prompt("Introduce el número "+(i+1)+":");

	}while(isNaN(nums[i]));

	if(comprobarMultiplo(nums[i])){

		multiplos.push(nums[i]);

	}

}

//Se muestran los multiplos
document.writeln("Multiplos de 5: <p/>");

for(let i = 0; i < multiplos.length; i++){

	document.writeln("- "+multiplos[i]+"<br/>");

}