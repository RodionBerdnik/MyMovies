
const searchWrap = document.getElementById('searchWrap');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', (e)=>{
    const searchValue = e.target.value;
    console.log(searchValue)
})