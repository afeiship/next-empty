(function () {
  'use strict';

  angular
    .module('dacangRemix')
    .constant('moment', moment)
    .constant('HTTP_TIMEOUT', 10 * 1e3);

})();
