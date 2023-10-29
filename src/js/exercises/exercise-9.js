/* 
EJERCICIO 9:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/
// Función para generar un número aleatorio entre min y max (incluyendo ambos)
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numerosAleatorios = [];
for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(generarNumeroAleatorio(0, 100));
}

const numeroMenor = Math.min(...numerosAleatorios);
const numeroMayor = Math.max(...numerosAleatorios);

console.log("Números aleatorios:", numerosAleatorios);
console.log("El número menor es:", numeroMenor);
console.log("El número mayor es:", numeroMayor);
