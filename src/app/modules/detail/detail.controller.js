export default class DetailController {
  constructor ($scope, $state, GetMovieService) {

    GetMovieService.getMovie({id: $state.params.id}, function(response) {
      $scope.movie = response;
    });

  }
}
