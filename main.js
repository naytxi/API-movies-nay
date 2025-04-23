 const API_KEY = '0793a5c442c049e9b0321cf71326063b'
 const BASE_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey='

 const formSearch = document.getElementById('form')
 const movieList = document.getElementById('movies');
 const searchInput = document.getElementById('searchId')

 const showMovies = (movies) => {
    movieList.innerHTML = ''
    movies.forEach((movie) => {
    movieList.innerHTML += `
    <div class="card col-lg-3 col-xs-12 col-md-6">
    <img src="${movie.image}" alt="${movie.tittle}">
    <div class="card-body">
    <h3 class="card-header">${movie.tittle}</h3>
    <h5 class="card-title">${movie.plot}</h5>
    <h5 class="card-title">${movie.genre}</h5>
    </div>
    </div>
    `
    })
}
    
const searchMovie = async (event) => {
    event.preventDefault()
    try {
    const search = formSearch.value
    const res = await axios.get(`${BASE_URL}/?name=${search}`)
    const movies = res.data
    showMovies(movies)
    } catch (error) {
    console.error(error)
    }
}

formSearch.addEventListener('submit', searchMovie)