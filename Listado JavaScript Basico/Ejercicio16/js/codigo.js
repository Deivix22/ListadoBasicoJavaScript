//Pedir un numero y mostrar la secuencia desde ese numero hasta el 1.
function obtenerNumeros(){

	let num = document.getElementById("num").value;

	let secuencia = "Secuencia: ";

	if(num<1)

		return "Error";

	for(let i = num;i>0;i--){

		secuencia += i+" ";

	}

	document.writeln(secuencia);
}