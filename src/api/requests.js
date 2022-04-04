
const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=49e800de027955c63868eb9e24ba6ba9&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=49e800de027955c63868eb9e24ba6ba9&with_network=123`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=49e800de027955c63868eb9e24ba6ba9&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49e800de027955c63868eb9e24ba6ba9&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49e800de027955c63868eb9e24ba6ba9&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=49e800de027955c63868eb9e24ba6ba9&with_genres=27`,
  fetchPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=49e800de027955c63868eb9e24ba6ba9`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=49e800de027955c63868eb9e24ba6ba9&with_genres=99`,
};

export default requests;