/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/

const peliculasDrama = movies
  .filter((pelicula) => pelicula.categories.includes("Drama"))
  .map((pelicula) => ({
    title: pelicula.title,
    description: pelicula.description,
  }));

console.log("Películas de Drama con título y descripción:");
console.log(peliculasDrama);
