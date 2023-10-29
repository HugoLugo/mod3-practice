/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

function compararPorRating(a, b) {
    const ratingA = a.rating;
    const ratingB = b.rating;
  
    if (ratingA > ratingB) return -1;
    if (ratingA < ratingB) return 1;
    return 0;
  }
  
  const peliculasOrdenadasPorRating = movies.slice().sort(compararPorRating);
  
  console.log("Películas ordenadas por rating de mayor a menor:");
  console.log(peliculasOrdenadasPorRating);
  