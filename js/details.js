import { getMovie } from "./services/api.js";
import { pipeDuration } from "./helpers/pipeDuration.js";
import { render } from "./helpers/render.js";

window.addEventListener("hashchange", (e) => {
  start();
});
const content = document.getElementById("content"); 
start()

function start() {
  const movieId = window.location.hash.slice(1)

  getMovie(movieId).then((movie)=>{
    renderMovie(movie);
}).catch((movieError)=>{
    alert('Error gettig movie');
    console.warn(movieError)
});
}



function renderMovie(movie) {
  const movieHTML = `<h1 class="title">${movie.name}</h1>
<div class="content-wrap">
    <div class="poster-wrap">
        <img src="${movie.poster}" alt="${movie.name}" width="2" height="3"
        decoding="async" class="content-img" />
    <div class="movie-rating">
        <h3 class="rating-stars">${createStarIcons(movie.rating)}</h3>
        <h3>Grade: ${movie.rating}</h3>   
    </div>
</div>
    <ul class="content-info">
        <li>Year:<a href="/#year=${movie.year}" class="info"> ${movie.year}</a></li>
        <li>Country:<a href="/#country=${movie.country}" class="info"> ${movie.country}</a></li>
        <li>Genre:<a href="/#genre=${movie.genre}" class="info"> ${movie.genre}</a></li>
        <li>Director:<a href="/#director=${movie.director}" class="info"> ${movie.director}</a></li>
        <li>Actors:<span> ${movie.actors}</span></li>
        <li>Duration:<span> ${pipeDuration(movie.duration)}</span></li>
        <li>Description:<span class="description"> ${movie.description}</span> </li>
    </ul>
</div>
<div class="trailer">Trailer</div>
<iframe loading="lazy" width="560" height="315" src="${movie.trailer}" class="video"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  render(movieHTML, content);
}

function createStarIcons(rating) {
      let starIcons = "";
  for (let i = 0; i < 10; i++) {
    if (rating > i + 0.5) {
       starIcons += '<i class="fas fa-star"></i>';
     }
    else if (rating > i) {
      starIcons += '<i class="fas fa-star-half-alt"></i>';
    }
    else{
        starIcons+='<i class="far fa-star"></i>';
    }
  }
  return starIcons;
}
