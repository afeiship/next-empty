(function() {
  'use strict';

  angular
    .module('angularAdminUi')
    .config(config);

  /** @ngInject */
  function config($httpProvider, HTTP_TIMEOUT) {
    $httpProvider.defaults.timeout = HTTP_TIMEOUT;
  }

})();
