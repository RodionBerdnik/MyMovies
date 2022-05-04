const api = axios.create({
    baseURL: 'http://localhost:1234'
});

api.interceptors.response.use(
    (res)=> Promise.resolve(res.data),
    (err)=> Promise.reject(err)
);

function render(html, element){
    element.innerHTML=html;
}