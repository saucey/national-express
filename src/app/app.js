import '../styles/styles.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './modules/home';
import list from './modules/list';
import detail from './modules/detail';

angular.module('app', [uirouter, home, list, detail])
    .config(routing);



