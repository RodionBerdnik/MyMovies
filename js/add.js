import { createMovie } from "./api.js";
import { formatTrailerURL } from "./formatTrailerString.js";

const addForm = document.getElementById("addForm");

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
      trailer: formatTrailerURL(e.target.trailer.value),
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