//Devuelve la longitud de la cadena
function calcularLongitud(){

	let num = document.getElementById("num").value;

	alert(num.length);

}

//Muestra el numero al revés
function mostrarAlRreves(){

	let num = document.getElementById("num").value;

	//Se eliminan los espacios en blanco
	num = num.replace(/ /g, "");

	let cadena = "";
	let i = num.length;

	while (i >= 0) {

	  cadena = cadena +  num.charAt(i);
	  i--;

	}

	alert(cadena);

}