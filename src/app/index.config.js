(function() {
  'use strict';

  angular
    .module('dacangRemix')
    .config(config);

  /** @ngInject */
  function config($httpProvider, HTTP_TIMEOUT) {
    $httpProvider.defaults.timeout = HTTP_TIMEOUT;
  }

})();
