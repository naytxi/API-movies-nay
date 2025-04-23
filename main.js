const BASE_URL = 'http://www.omdbapi.com/';
const API_KEY = '0793a5c442c049e9b0321cf71326063b';

 const formSearch = document.getElementById('form')
 const movieList = document.getElementById('movies');
 const searchInput = document.getElementById('searchId')

 const showMovies = async (movies) => {
    movieList.innerHTML = '';
    
    for (let movie of movies) {

      const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}`);
      const fullMovie = res.data;
  
      movieList.innerHTML += `
        <div class="card col-lg-3 col-xs-12 col-md-6">
          <img src="${fullMovie.Poster}" alt="${fullMovie.Title}">
          <div class="card-body">
            <h3 class="card-header">${fullMovie.Title}</h3>
            <h5 class="card-title">${fullMovie.Plot}</h5>
            <h5 class="card-title">${fullMovie.Genre}</h5>
          </div>
        </div>
      `;
    }
  };
  
  const searchMovie = async (event) => {
    event.preventDefault();
    try {
      const search = searchInput.value;
      const res = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${search}`);
      const movies = res.data.Search;
      
      if (movies) {
        showMovies(movies);
      } else {
        movieList.innerHTML = '<p>No se encontraron resultados.</p>';
      }
  
    } catch (error) {
      console.error(error);
      movieList.innerHTML = '<p>Error al buscar películas.</p>';
    }
  };

formSearch.addEventListener('submit', searchMovie)