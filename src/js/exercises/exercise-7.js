/* 
* EJERCICIO 7:
! _______________________________________________________
* Escribir una función que calcule si una cadena de texto
* es un palíndromo y devuelva un mensaje con la cadena de 
* texto y el resultado
*/
function esPalindromo(String) {
    String = String.replace(/ /g, "").toLowerCase();

    const StringInvertida = String.split("").reverse().join("");

    if (String === StringInvertida) {
        return `La cadena de texto "${String}" es un palíndromo.`;
    } else {
        return `La cadena de texto "${String}" no es un palíndromo.`;
    }
}

const String1 = "anilina";
const String2 = "hola mundo";

console.log(esPalindromo(String1)); 
console.log(esPalindromo(String2)); 

