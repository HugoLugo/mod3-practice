/* 
* EJERCICIO 4:
! ___________________________________
* Muestra el resultado de quitar las vocales a un string
* que pasamos como parámetro:
* “H, m lrnng Jvscrpt” // string original: 
* “Hi, I am learning Javascript
*/

function quitarVocales(inputString) {
  // Utilizamos una expresión regular para encontrar las vocales y las reemplazamos con una cadena vacía
  let stringSinVocales = inputString.replace(/[aeiouAEIOU]/g, '');
  return stringSinVocales;
}

let OriginalString = "Hi, I am learning Javascript";
let resultado = quitarVocales(OriginalString);
console.log(resultado);
