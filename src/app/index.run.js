(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$log) {
    $log.log('Run block!');
  }

})();
