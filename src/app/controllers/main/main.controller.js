(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, AppService) {
    var vm = this;
    vm.test1 = 'test';
    console.log('main ctrl init!');
    console.log(AppService.isLogin());
  }
})();
