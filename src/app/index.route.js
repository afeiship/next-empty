(function () {
  'use strict';

  angular
    .module('angularAdminUi')
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
      })
      .state('permission', {
        url: '/permission',
        abstract: true,
        templateUrl: 'app/controllers/permission/index.html',
        controller: 'PermissionController',
        controllerAs: 'permission'
      })
      .state('permission.list', {
        url: '/list',
        views: {
          'permission': {
            templateUrl: 'app/controllers/permission/list/index.html',
            controller: 'PermissionListController',
            controllerAs: 'vm'
          }
        }
      })
      .state('permission.update', {
        url: '/update/:user_id',
        views: {
          'permission': {
            templateUrl: 'app/controllers/permission/update/index.html',
            controller: 'PermissionUpdateController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/main');
  }

})();
