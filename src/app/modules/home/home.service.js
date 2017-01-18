export default class OmdbService {
  constructor ($resource) {
    'ngInject';
    var omdbService = $resource(
        'http://www.omdbapi.com/?s=:title',
        {},
        {
          'getMovies': {
            method: 'GET',
            // isArray: true
          }
        }
    );
    this.omdbService = omdbService;
    return omdbService;
  }
};
