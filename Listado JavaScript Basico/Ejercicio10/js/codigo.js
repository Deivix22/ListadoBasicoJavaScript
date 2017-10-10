let numPedido;

let cambiaNumeros = function(num){

	//Declaramos los numeros escritos
	let ceroNueve = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve"];
	let diezQuince = ["Diez", "Once", "Doce", "Trece", "Catorce", "Quince"];
	let numerosDecenas = ["Dieci", "Veinti", "Treinta", "Cuarenta", "Cincuenta", "Sesenta", "Setenta", "Ochenta", "Noventa"];	
	
	//Se comprueban los numeros
	switch(true){
		case num==0: return ceroNueve[0];
				break;

		case num==1: return ceroNueve[1];
				break;

		case num==2: return ceroNueve[2];
				break;

		case num==3: return ceroNueve[3];
				break;

		case num==4: return ceroNueve[4];
				break;

		case num==5: return ceroNueve[5];
				break;

		case num==6: return ceroNueve[6];
				break;

		case num==7: return ceroNueve[7];
				break;

		case num==8: return ceroNueve[8];
				break;

		case num==9: return ceroNueve[9];
				break;

		case num==10: return diezQuince[0];
				break;

		case num==11: return diezQuince[1];
				break;

		case num==12: return diezQuince[2];
				break;

		case num==13: return diezQuince[3];
				break;

		case num==14: return diezQuince[4];
				break;

		case num==15: return diezQuince[5];
				break;

		case num>15 && num<20: return numerosDecenas[0]+segundoNumero(num.substring(num.length, 1));
				break;

		case num>20 && num<30: return numerosDecenas[1]+segundoNumero(num.substring(num.length, 1));
				break;

		case num>30 && num<40: return numerosDecenas[2]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>40 && num<50: return numerosDecenas[3]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>50 && num<60: return numerosDecenas[4]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>60 && num<70: return numerosDecenas[5]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>70 && num<80: return numerosDecenas[6]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>80 && num<90: return numerosDecenas[7]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num>90 && num<100: return numerosDecenas[8]+" y "+segundoNumero(num.substring(num.length, 1));
				break;

		case num==20: return numerosDecenas[1];
				break;

		case num==30: return numerosDecenas[2];
				break;

		case num==40: return numerosDecenas[3];
				break;

		case num==50: return numerosDecenas[4];
				break;

		case num==60: return numerosDecenas[5];
				break;

		case num==70: return numerosDecenas[6];
				break;

		case num==80: return numerosDecenas[7];
				break;

		case num==90: return numerosDecenas[8];
				break;

		default: return "Error";
			break;

	}

}

//Calcula el segundo numero
let segundoNumero = function(num){

	//Declaramos los numeros escritos
	let ceroNueve = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];

	//Se comprueban los numeros
	switch(true){

		case num==0: return ceroNueve[0];
				break;

		case num==1: return ceroNueve[1];
				break;

		case num==2: return ceroNueve[2];
				break;

		case num==3: return ceroNueve[3];
				break;

		case num==4: return ceroNueve[4];
				break;

		case num==5: return ceroNueve[5];
				break;

		case num==6: return ceroNueve[6];
				break;

		case num==7: return ceroNueve[7];
				break;

		case num==8: return ceroNueve[8];
				break;

		case num==9: return ceroNueve[9];
				break;

		default: return "Error";
			break;

	}

}

do{

	numPedido = prompt("Introduce un número entre 0 y 99");

}while(isNaN(numPedido) || numPedido < 0 || numPedido > 99 || numPedido%1 != 0);

alert(cambiaNumeros(numPedido));