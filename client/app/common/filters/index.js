import angular from 'angular';

let commonFiltersModule = angular.module('app.common.filters', [])
  .filter('paymentTotal', function () {
    return function (data, key) {
      if (typeof (data) === 'undefined' && typeof (key) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum = sum + parseInt(data[i].rent[key]);
      }
      return sum;
    }
  })
.name;

export default commonFiltersModule;
