(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('PermissionListController', PermissionListController);

  /** @ngInject */
  function PermissionListController($log, $scope, $state) {
    var vm = this;

    vm.keywords = '';
    vm.list = [];
    vm.doCreate = doCreate;


    init();

    function doCreate() {
      $state.go('permission.create');
    }

    function init() {
      $log.log('do list!')
    }
  }

})();
