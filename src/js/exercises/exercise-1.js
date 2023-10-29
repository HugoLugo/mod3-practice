/* 
EJERCICIO 1:
Muestra el siguiente saludo pasando un nombre como parámetro
“Hello <name>, how are you doing today?”
*/

function saludar(nombre) {
  console.log("Hello " + nombre + ", how are you doing today?");
}

saludar("Hugo");

showContent(1, saludar("Hugo"));