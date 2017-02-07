(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .constant('moment', moment)
    .constant('HTTP_TIMEOUT', 10 * 1e3);

})();
