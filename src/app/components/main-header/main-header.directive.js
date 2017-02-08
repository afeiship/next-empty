(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .directive('mainHeader', mainHeader);

  /** @ngInject */
  function mainHeader($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-header/index.html',
      link: function (scope, element, attr) {

      }
    };
  }

})();
