

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
  
  export function getMovies() {
    return api.get("/movies");
  }
  export function getMovie(id) {
    return api.get("/movies/" + id);
  }
  export function createMovie(movieData) {
    return api.post("/movies", movieData);
  }
  export function updateMovie(id, movieData) {
    return api.patch("/movies/" + id, movieData);
  }
  export function deleteMovies(id) {
    return api.delete("/movies/" + id);
  }