import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import HomeController from './home.controller.js';
import routing from './home.routes.js';
import OmdbService from './home.service.js';
import MovieStore from '../../shared/movie.store';

export default angular.module('app.home', [uirouter, ngResource])
    .config(routing)
    .controller('HomeController', HomeController)
    .service('OmdbService', OmdbService)
    .service('MovieStore', MovieStore)
    .name;
