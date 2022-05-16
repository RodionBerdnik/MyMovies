import { getMovies } from "./api.js";
import { render } from "./render.js";

const searchWrap = document.getElementById('searchWrap');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

const debouncedSearchMovies = asyncDebouce(250, searchMovies);

searchInput.addEventListener('input', (e)=>{
    const searchValue = e.target.value; 
    debouncedSearchMovies(searchValue) 
});

function searchMovies(searchValue){
    if(searchValue) {
        getMovies({q: searchValue})
        .then((movies) => {
            renderSuggestions(movies)
            console.log(movies)
          })
          .catch((moviesError) => {
            console.warn(moviesError);
          });
    }
}

function renderSuggestions(movies){
    const movieHTML = movies.map(movie=>{
        return `<li><a href="/details.html#${movie.id}">${movie.name}</a></li>`
    }).join('');
    render(movieHTML, searchSuggestions);
}

export function asyncDebouce(delay, fn){
    let timer  = null;
    function sleep(ms){
        return new Promise((resolve)=>(timer = setTimeout(()=>resolve(), ms)));
    }
    return async (...args)=>{
        clearTimeout(timer);
        await sleep(delay);
        return fn(...args);
    };
}

// export function asyncThrottle(delay, fn){
//     let throttling = false;
//     let timer  = null;
//     return async (...args)=>{
//         if(throttling) return
//         throttling = true;
//         timer = setTimeout(()=>{
//             throttling = false;
//         }, daley);
//         return fn(...args)
//     }
// }