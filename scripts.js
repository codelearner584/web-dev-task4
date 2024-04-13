const movies = [
    { title: 'Inception', genre: 'Sci-Fi' },
    { title: 'The Shawshank Redemption', genre: 'Drama' },
    { title: 'The Dark Knight', genre: 'Action' },
    { title: 'Pulp Fiction', genre: 'Crime' },
    { title: 'Forrest Gump', genre: 'Drama' }
];

function displayMovies() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `<h3>${movie.title}</h3><p>Genre: ${movie.genre}</p>`;
        movieGrid.appendChild(movieCard);
    });
}

function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = '';
    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `<h3>${movie.title}</h3><p>Genre: ${movie.genre}</p>`;
        movieGrid.appendChild(movieCard);
    });
}

// Display initial set of movies on page load
displayMovies();
