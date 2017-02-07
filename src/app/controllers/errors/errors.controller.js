(function() {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('ErrorsController', ErrorsController);

  /** @ngInject */
  function ErrorsController($rootScope) {
    var vm = this;
    console.log('error ctrl init!');
  }
})();
