//Variables
let segundos, minutos, hora;

let sumarSegundo = function(){

	let hora = document.getElementById("hora").value;
	let min = document.getElementById("minuto").value;
	let seg = document.getElementById("segundo").value;

	hora = parseInt(hora);
	min = parseInt(min);
	seg = parseInt(seg);

	if(seg===59){

		if(min===59){

			if(hora===23){

				hora = 0;
				min = 0;
				seg = 0;

			}else{

				hora+=1;
				min = 0;
				seg = 0;

			}

		}else{

			min+=1;
			seg=0;

		}

	}else{

		seg+=1;

	}

	return "hora: "+hora+" min: "+min+" seg: "+seg;

}

function comprobarHora(){

	let hora = document.getElementById("hora").value;
	let min = document.getElementById("minuto").value;
	let seg = document.getElementById("segundo").value;

	hora = parseInt(hora);
	min = parseInt(min);
	seg = parseInt(seg);

	if(hora > 23 || hora < 0)

		alert("Hora incorrecta");

	if(min > 59 || min < 0)

		alert("Hora incorrecta");

	if(seg > 59 || seg < 0)

		alert("Hora incorrecta");

	alert(sumarSegundo(seg, min, hora));

	alert("Hora correcta");
}