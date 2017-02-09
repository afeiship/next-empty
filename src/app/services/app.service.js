/**
 * Created by 13501 on 2016/7/25.
 */
(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .service('AppService', AppService);

  /** @ngInject */
  function AppService($state, $rootScope, nxToast) {

    this.isLogin = function () {
      return false;
    };

    this.toast = function (inMsg) {
      nxToast.show({
        cssClass: 'my-toast',
        msg: inMsg
      });
    }

  }


})();
