/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function esIsograma(cadena) {
    cadena = cadena.replace(/ /g, "").toLowerCase();
  
    const frecuenciaLetras = {};
  
    for (let letra of cadena) {
      if (frecuenciaLetras[letra]) {
        return `La cadena '${cadena}' no es un isograma`;
      }
      frecuenciaLetras[letra] = 1;
    }
  
    return `La cadena '${cadena}' es un isograma`;
  }
  
  const cadena1 = "hola mundo";
  const cadena2 = "murcielago";
  
  console.log(esIsograma(cadena1));
  console.log(esIsograma(cadena2));
  