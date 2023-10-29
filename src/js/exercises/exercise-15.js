/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

const valoraciones = movies.map((pelicula) => pelicula.rating);
const valoracionMedia = valoraciones.reduce((total, valoracion) => total + valoracion, 0) / valoraciones.length;

const mejoresPeliculas = movies.filter((pelicula) => pelicula.rating > valoracionMedia);

const mejoresPeliculasInfo = mejoresPeliculas.map((pelicula) => ({ title: pelicula.title, description: pelicula.description }));

mejoresPeliculasInfo.sort((a, b) => b.rating - a.rating);

console.log("Mejores películas ordenadas de mejor a peor:");
console.log(mejoresPeliculasInfo);
