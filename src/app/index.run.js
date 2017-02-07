(function () {
  'use strict';

  angular
    .module('dacangRemix')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope,$log) {
    $log.log('Run block!');
  }

})();
