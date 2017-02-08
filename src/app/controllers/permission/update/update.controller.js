(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .controller('PermissionUpdateController', PermissionUpdateController);

  /** @ngInject */
  function PermissionUpdateController($state, $log) {
    var vm = this;
    var userId = $state.params.user_id;
    vm.user = {
      realname: '',
      mobile: '',
      extension_number: '',
      orgId: 115
    };


    init();


    function init() {
      $log.log('update init!')
    }


  }

})();
