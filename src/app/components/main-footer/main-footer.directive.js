(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .directive('mainFooter', mainFooter);

  /** @ngInject */
  function mainFooter($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-footer/index.html',
      link: function (scope, element, attr) {

      }
    };
  }

})();
