/* 
* EJERCICIO 7:
! _______________________________________________________
* Escribir una función que calcule si una cadena de texto
* es un palíndromo y devuelva un mensaje con la cadena de 
* texto y el resultado
*/
function esPalindromo(cadena) {
    cadena = cadena.replace(/ /g, "").toLowerCase();

    const cadenaInvertida = cadena.split("").reverse().join("");

    if (cadena === cadenaInvertida) {
        return `La cadena "${cadena}" es un palíndromo.`;
    } else {
        return `La cadena "${cadena}" no es un palíndromo.`;
    }
}

const cadena1 = "anilina";
const cadena2 = "hola mundo";

console.log(esPalindromo(cadena1)); // Resultado: La cadena "anilina" es un palíndromo.
console.log(esPalindromo(cadena2)); // Resultado: La cadena "hola mundo" no es un palíndromo.

