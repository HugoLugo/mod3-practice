/* 
* EJERCICIO 5:
! _________________________________________________________
*Escribe una función llamada "repetitions" que recibe
*de entrada una cadena de texto y 
*devuelve otra cadena con cada letra repetida tantas veces
*como la posición que ocupa  empezando la primera *repetición en mayúscula y el resto en minúscula

*Ejemplos:
* repetitions(‘code’) 
! result: “COoDddEeee”

* repetitions(‘list’) 
! result: “LIiSssTttt”

* repetitions(function) 
! result: “FUuNnnTtttIiiiiOoooooNnnnnnn”
*/

function repetitions(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
      let letra = inputString.charAt(i);
      
      let numRepeticiones = i + 1;
      
      for (let j = 0; j < numRepeticiones; j++) {
          if (j === 0) {
              result += letra.toUpperCase();
          } else {
              result += letra.toLowerCase();
          }
      }
  }

  return result;
}

let inputString = "abcdefg";
let resultado = repetitions(inputString);
console.log(resultado);
