export default class HomeController {
  constructor($scope, $location, OmdbService, MovieStore, $rootScope) {

    $scope.submitSearch = (movieTitle) => {
      MovieStore.setSearch(movieTitle.search);

      OmdbService.getMovies({title: movieTitle.search}, function(response) {
        MovieStore.setMovies(response.Search);
        MovieStore.setTotalMoviesAvailable(response.totalResults);
        $location.path('/list');
      });
    }
  }
}
