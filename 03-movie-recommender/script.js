// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


const recommend = (movie, minRating = 8) => movie.rating >= minRating;


const recommendedMovies = movies
  .filter(movie => recommend(movie))
  .map(movie => `<li>${movie.title} (${movie.genre}) - ${movie.rating} ⭐</li>`);


document.getElementById("movie-list").innerHTML = recommendedMovies.join("");

