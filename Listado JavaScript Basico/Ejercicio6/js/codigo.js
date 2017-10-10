//Ordena tres numeros pasados por parametro
function ordenaNumeros() {

	let num1 = document.getElementById("num1").value;
	let num2 = document.getElementById("num2").value;
	let num3 = document.getElementById("num3").value;

	if(num1 > num2)

		if(num1 > num3)

			if(num3 > num2)

				document.writeln(num1+" > "+num3+" > "+ num2);

			else

				document.writeln(num1+" > "+num2+" > "+ num3);

		else

			document.writeln(num3+" > "+num1+" > "+ num2);

	else

		if(num2 > num3)

			if(num1 > num3)

				document.writeln(num2+" > "+num1+" > "+ num3);

			else

				document.writeln(num2+" > "+num3+" > "+ num1);

		else

			document.writeln(num3+" > "+num2+" > "+ num1);
		
}