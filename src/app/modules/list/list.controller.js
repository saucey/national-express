export default class ListController {
  constructor($scope, MovieStore, GetMoviesService, $state) {

    if (typeof $state.params.title !== 'undefined' && typeof $state.params.page !== 'undefined') {
      MovieStore.setSearch($state.params.title);
      GetMoviesService.getMovies({title: $state.params.title, page: $state.params.page}, function(response) {
        MovieStore.setMovies(response.Search);
        MovieStore.setTotalMoviesAvailable(response.totalResults);
        $scope.movieList = response.Search;
        $scope.numberOfPages = Math.floor(MovieStore.getTotalMoviesAvailable() / $scope.perPage);
      });
    }
    $scope.movieList = MovieStore.getMovies();
    $scope.currentPage = parseInt($state.params.page, 10) || 1;

    $scope.perPage = 10;

    $scope.numberOfPages = Math.floor(MovieStore.getTotalMoviesAvailable() / $scope.perPage);
    $scope.nextPage = $scope.currentPage + 1;
    $scope.prevPage = $scope.currentPage - 1;

    $scope.title = {
      search: MovieStore.getSearch()
    };

    $scope.searchMovie = (title) => {
      MovieStore.setSearch(title);
      GetMoviesService.getMovies({title: title.search}, function(response) {
        MovieStore.setMovies(response.Search);
        MovieStore.setTotalMoviesAvailable(response.totalResults);
        $scope.movieList = response.Search;
        $scope.numberOfPages = Math.floor(MovieStore.getTotalMoviesAvailable() / $scope.perPage);
      });
    }
  }
}
