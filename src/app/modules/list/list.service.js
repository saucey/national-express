export default class GetMoviesService {
  constructor ($resource) {
    'ngInject';
    var getMoviesService = $resource(
        'http://www.omdbapi.com/?s=:title&page',
        {},
        {
          'getMovies': {
            method: 'GET',
            // isArray: true
          }
        }
    );
    this.getMoviesService = getMoviesService;
    return getMoviesService;
  }
};
