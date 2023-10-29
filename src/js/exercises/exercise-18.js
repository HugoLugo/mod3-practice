/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/
function textoAHashtag(string) {
    const palabras = string.split(" ");
  
    const hashtag = palabras.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join("");
  
    return `#${hashtag}`;
  }
  
  const string = "Programando en Javascript";
  const hashtag = textoAHashtag(string);
  console.log(hashtag); 