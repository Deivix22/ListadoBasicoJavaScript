//Imprime los numeros de 0 a 100
for (i=0; i<100; i++){

    document.write((i+1)+",");

	//Cada vez que haya un multimo de 7 se introduce un salto de linea
    if((i+1)%7==0)

     	document.write("<br />");
     
}
