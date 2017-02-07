(function() {
  'use strict';

  angular
    .module('dacangRemix')
    .controller('ErrorsController', ErrorsController);

  /** @ngInject */
  function ErrorsController($rootScope) {
    var vm = this;
    console.log('error ctrl init!');
  }
})();
