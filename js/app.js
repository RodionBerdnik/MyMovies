const api = axios.create({
  baseURL: "http://localhost:1234",
});

api.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err)
);
//   api.interceptors.response.use(
//     (res) => [null, res.data],
//     (err) => [err, null]
//   );

function getMovies() {
  return api.get("/movies");
}
function getMovie(id) {
  return api.get("/movies/" + id);
}
function createMovie(movieData) {
  return api.post("/movies", movieData);
}
function updateMovie(id, movieData) {
  return api.patch("/movies/" + id, movieData);
}
function deleteMovies(id) {
  return api.delete("/movies/" + id);
}

const addForm = document.getElementById("addForm");
const movieList = document.getElementById("movieList"); 
let MOVIES = [];
start();

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newMovie = {
      name: e.target.name.value,
      year: Number(e.target.year.value),
      genre: e.target.genre.value,
      duration: e.target.duration.value,
      description: e.target.description.value,
      country: e.target.country.value,
      actors: e.target.actors.value,
      director: e.target.director.value,
      poster: e.target.poster.value,
      trailer: e.target.trailer.value,
      rating: Number(e.target.raiting.value),
      watched: e.target.watched.checked,
      favorite: e.target.favorite.checked,
      comingSoon: e.target.comingSoon.checked,
      type: e.target.type.value,
      comment: e.target.comment.value,
  }
//   const newMovie = {
//     name: "Movie",
//     year: 2022,
//     genre: "Comedy",
//     duration: 120, //mins
//     description: "A comedy about a",
//     counry: "USA",
//     actors: "Tom Cruise, Tom Holland",
//     director: "Steven Spielberg",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg/800px-%D0%94%D0%BE%D0%BA%D1%82%D0%BE%D1%80_%D0%A1%D1%82%D1%80%D1%8D%D0%BD%D0%B4%D0%B6_%D0%92_%D0%BC%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B1%D0%B5%D0%B7%D1%83%D0%BC%D0%B8%D1%8F_%D1%82%D0%B8%D0%B7%D0%B5%D1%80_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpeg",
//     trailer: "https://www.youtube.com/embed/3reos8XybiA",
//     raiting: 8.5,
//     watched: false,
//     favourite: false,
//     comingSoon: false,
//     type: "movie",
//     comment: "lorem ipsum",
//   };

  createMovie(newMovie)
    .then(() => {
      e.target.reset();
      window.location.replace("/");
    })
    .catch((createdMovieError) => {
      alert("Error creating movie");
      console.warn(createdMovieError);
    });
});

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

function render(html, element) {
  element.innerHTML = html;
}
