(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .directive('mainSidebar', mainSidebar);

  /** @ngInject */
  function mainSidebar($rootScope, $state) {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/main-sidebar/index.html',
      link: function (scope, element, attr) {
      }
    };
  }

})();
