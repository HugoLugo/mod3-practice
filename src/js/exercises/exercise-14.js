/* 
EJERCICIO 14:
Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/
function encontrarMejorValorada(actor) {
    const peliculasDelActor = movies.filter((pelicula) => pelicula.actors.includes(actor));
    if (peliculasDelActor.length === 0) {
      return null; 
    }
    return peliculasDelActor.reduce((mejor, pelicula) => (pelicula.rating > mejor.rating ? pelicula : mejor));
  }
  
  const actores = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  
  const peliculasMejorValoradas = actores.map((actor) => encontrarMejorValorada(actor)).filter((pelicula) => pelicula !== null);
  
  console.log("Películas mejor valoradas de los actores:");
  console.log(peliculasMejorValoradas);
  