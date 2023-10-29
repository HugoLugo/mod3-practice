/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del century al que pertenece.
*/

function centuryoftheyear(year) {
    const century = Math.ceil(year / 100);
    return century;
  }
  

  const year = 2023;
  const century = centuryoftheyear(year);
  console.log(`El año ${year} pertenece al siglo ${century}`);
  