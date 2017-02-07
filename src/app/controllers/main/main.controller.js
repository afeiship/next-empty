(function() {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope,AppService) {
    var vm = this;
    console.log('main ctrl init!');
    console.log(AppService.isLogin());
  }
})();
