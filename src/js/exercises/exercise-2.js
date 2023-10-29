/* 
* EJERCICIO 2:
! ______________________________________________
* Muestra el siguiente mensaje dependiendo de si 
* un número es par o impar:
* “Number 34 is even” ó “Number 13 is odd”
*/


function determinarParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log("Number " + numero + " is even");
    } else {
        console.log("Number " + numero + " is odd");
    }
}

determinarParOImpar(34);
determinarParOImpar(13);

showContent (2, determinarParOImpar(34),);