import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ListController from './list.controller.js';
import routing from './list.routes.js';
import MovieStore from '../../shared/movie.store';
import GetMoviesService from './list.service.js';

export default angular.module('app.list', [uirouter, ngResource])
    .config(routing)
    .controller('ListController', ListController)
    .service('MovieStore', MovieStore)
    .service('GetMoviesService', GetMoviesService)
    .name;
