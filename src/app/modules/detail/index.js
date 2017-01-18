import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import DetailController from './detail.controller.js';
import GetMovieService from './detail.service.js';
import routing from './detail.routes.js';

export default angular.module('app.detail', [uirouter, ngResource])
    .config(routing)
    .controller('DetailController', DetailController)
    .service('GetMovieService', GetMovieService)
    .name;
