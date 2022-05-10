import { getMovies } from "./api.js";
import { render } from "./render.js";

const movieList = document.getElementById("movieList"); 
let MOVIES = [];
start();

function start() {
    getMovies()
    .then((movies) => {
        MOVIES = movies;
        renderMovies(MOVIES, movieList)
      })
      .catch((moviesError) => {
        console.warn(moviesError);
      });
}

function renderMovies(movies, movieListElem) {
  const moviesHTML = movies
    .map((movie) => {
      return `<a href="./details.html#${movie.id}">
        <div class="content-main-wrap">
            <img src="${movie.poster}" alt="${movie.name}" width="2" height="3"
                decoding="async" class="content-main-img" />
            <div class="content-main-info">
                <h2 class="main-title">${movie.name}</h2>
                <h3 class="main-info">${movie.year}, ${movie.genre}</h3>
            </div>
        </div>
    </a>`;
    })
    .join("");
  render(moviesHTML, movieListElem);
}