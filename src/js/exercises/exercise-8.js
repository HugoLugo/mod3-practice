/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

function limpiarCadena(cadena) {
    return cadena.replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function posicionEnAbecedario(letra) {
    letra = letra.toLowerCase();
    const codigoA = 'a'.charCodeAt(0);
    return letra.charCodeAt(0) - codigoA + 1;
}

function posicionesEnAbecedario(cadena) {
    const cadenaLimpia = limpiarCadena(cadena);
    const posiciones = [];
    for (let i = 0; i < cadenaLimpia.length; i++) {
        const letra = cadenaLimpia[i];
        const posicion = posicionEnAbecedario(letra);
        posiciones.push(posicion);
    }
    return posiciones;
}

const texto = "Hola, mundo!";
const posiciones = posicionesEnAbecedario(texto);
console.log(posiciones);
