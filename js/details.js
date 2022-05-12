import { getMovie } from "./api.js";
import { render } from "./render.js";

const movieId = window.location.hash.slice(1)
const content = document.getElementById("content"); 

getMovie(movieId).then((movie)=>{
    renderMovie(movie);
}).catch((movieError)=>{
    alert('Error gettig movie');
    console.warn(movieError)
})


function renderMovie(movie) {
    let starIcons = ""; 
    const halfIcons = '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < 10; i++) {
     if (movie.raiting > i) {
        starIcons += '<i class="fas fa-star"></i>';
      }
      else{
        starIcons=starIcons+'<i class="fas fa-star-half-alt"></i>'
      }
    }

  const movieHTML = `<h1 class="title">${movie.name}</h1>
<div class="content-wrap">
    <div class="poster-wrap">
        <img src="${movie.poster}" alt="${movie.name}" width="2" height="3"
        decoding="async" class="content-img" />
    <div class="movie-rating">
        <h3 class="rating-stars">${starIcons}</h3>
        <h3>Grade: ${movie.raiting}</h3>   
    </div>
</div>
    <ul class="content-info">
        <li>Year:<span class="info"> ${movie.year}</span></li>
        <li>Country:<span class="info"> ${movie.country}</span></li>
        <li>Genre:<span class="info"> ${movie.genre}</span></li>
        <li>Director:<span class="info"> ${movie.director}</span></li>
        <li>Actors:<span class="info"> ${movie.actors}</span></li>
        <li>Duration:<span class="info"> ${movie.duration} min</span></li>
        <li>Description:<span class="description"> ${movie.description}</span> </li>
    </ul>
</div>
<div class="trailer">Trailer</div>
<iframe loading="lazy" width="560" height="315" src="${movie.trailer}" class="video"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  render(movieHTML, content);
}

