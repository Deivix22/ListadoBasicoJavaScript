let contador = 0;
let suma = 0;

function media() {

	let num = document.getElementById("numeromedia").value;
	if(num == 0)
		alert("La media es: "+parseInt(suma)/parseInt(contador));
	
		suma = parseInt(suma) + parseInt(num);
		contador++;

		document.getElementById("numeromedia").value = "";
}