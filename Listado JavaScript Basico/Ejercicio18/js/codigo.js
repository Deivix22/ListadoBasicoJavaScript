//Forma una piramide mediante dos bucles anidados
for (i=1; i<=10; i++){

    for (j=0; j<i; j++){

        if(j==9)

            document.write(0);

         else

            document.write(j+1);

    }

    document.write("<br />");
}
