/**
 * Created by 13501 on 2016/7/25.
 */
(function() {
  'use strict';

  angular
    .module('dacangRemix')
    .service('AppService', AppService);

  /** @ngInject */
  function AppService($state, $rootScope) {
    this.isLogin = function() {
      return false;
    };
  }


})();
