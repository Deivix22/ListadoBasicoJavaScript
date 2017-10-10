//Forma una piramide mediante dos bucles anidados
	for (i=1; i<=10; i++){

        for (j=0; j<i; j++){

        	//si es 10 que imprima un 0.
        	if(i===10)

              document.write(0);

        	else

              document.write(i);

        }

        document.write("<br />");
    }
