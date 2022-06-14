import { getMovies } from "./services/api.js";
import { render } from "./helpers/render.js";
import { serializationParam } from "./helpers/serializationParam.js";

window.addEventListener("hashchange", (e) => {
  start();
});

const movieList = document.getElementById("movieList");
let MOVIES = [];

start();

function start() {
  const param = serializationParam(window.location.hash.slice(1));
 console.log(param)
  let params = {...param};
  getMovies(params)
    .then((movies) => {
      MOVIES = movies;
      renderMovies(MOVIES, movieList);
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
            <img src="${movie.poster}" alt="${movie.name}" width="121" height="179"
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
