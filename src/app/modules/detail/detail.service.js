
export default class GetMovieService {
  constructor ($resource) {
    'ngInject';
    var getMovieService = $resource(
        'http://www.omdbapi.com/?i=:id',
        {},
        {
          'getMovie': {
            method: 'GET',
            // isArray: true
          }
        }
    );
    this.getMovieService = getMovieService;
    return getMovieService;
  }
};
