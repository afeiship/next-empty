(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('PermissionListController', PermissionListController);

  /** @ngInject */
  function PermissionListController($log, AppService) {
    var vm = this;

    vm.keywords = '';
    vm.list = [];
    vm.doCreate = doCreate;


    init();

    function doCreate() {
      //$state.go('permission.create');
      AppService.toast('To create page!')
    }

    function init() {
      $log.log('do list!')
    }
  }

})();
