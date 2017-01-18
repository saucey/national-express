export default class MovieStore {
  constructor() {
    this.movies = [];
    this.movie = [];
    this.totalMoviesAvailable = 0;
  }

  getSearch() {
    return this.search;
  }

  setSearch(search) {
    this.search = search;
  }

  getMovies() {
    return this.movies;
  }

  setMovies(movies) {
    this.movies = movies;
  }

  getMovie() {
    return this.movie;
  }

  setMovie(movie) {
    this.movie = movie;
  }

  getTotalMoviesAvailable() {
    return this.totalMoviesAvailable;
  }

  setTotalMoviesAvailable(total) {
    this.totalMoviesAvailable = total;
  }
};
