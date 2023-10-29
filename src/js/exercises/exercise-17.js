/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function esIsograma(string) {
    string = string.replace(/ /g, "").toLowerCase();
  
    const frecuenciaLetras = {};
  
    for (let letra of string) {
      if (frecuenciaLetras[letra]) {
        return `La cadena de texto'${string}' no es un isograma`;
      }
      frecuenciaLetras[letra] = 1;
    }
  
    return `La cadena de texto '${string}' es un isograma`;
  }
  
  const string1 = "hola mundo";
  const string2 = "murcielago";
  
  console.log(esIsograma(string1));
  console.log(esIsograma(string2));
  