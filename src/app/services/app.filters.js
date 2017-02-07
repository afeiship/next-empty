(function () {
  'use strict';

  angular
    .module('angularAdminUi')
    .filter('toTestStr', toTestStr)
    .filter('toTimestamp', toTimestamp);

  function toTimestamp() {
    return function (inValue) {
      var normalizeDateStr = String(inValue).replace(/-/g, '/');
      return (new Date(normalizeDateStr)).getTime() || Date.now();
    };
  }

  function toTestStr() {
    return function (inValue) {
      return inValue + 'TETST';
    }
  }

})();
