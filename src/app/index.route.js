(function() {
  'use strict';

  angular
    .module('dacangRemix')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/controllers/main/index.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('errors', {
        url: '/errors',
        templateUrl: 'app/controllers/errors/index.html',
        controller: 'ErrorsController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/main');
  }

})();
