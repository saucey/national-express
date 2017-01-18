import templateUrl from 'detail/detail.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
      .state('detail', {
        url: '/detail/:id',
        views: {
          'body@': {
            templateUrl,
            controller: 'DetailController',
          }
        },
      });
};
