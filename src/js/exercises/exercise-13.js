/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
*/
const peliculasAgrupadas = {};

movies.forEach((pelicula) => {
  const categoria = pelicula.category;
  if (!peliculasAgrupadas[categoria]) {
    peliculasAgrupadas[categoria] = [];
  }
  peliculasAgrupadas[categoria].push(pelicula);
});

console.log("Películas agrupadas por categoría:");
console.log(peliculasAgrupadas);
