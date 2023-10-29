/* 
* EJERCICIO 3:
! __________________________________________________
* Muestra el siguiente mensaje con el resultado de contar
* el número de vocales que tiene un string:
* “Number of vowels is <result>”
*/

function countVowels(inputString) {
  inputString = inputString.toLowerCase();

  let vowelCount = inputString.match(/[aeiou]/g);

  if (vowelCount) {
    let result = vowelCount.length;
    return `Number of vowels is ${result}`;
  } else {
    return "Number of vowels is 0";
  }
}

let inputString = "Hello, World!";
let result = countVowels(inputString);
console.log(result);
