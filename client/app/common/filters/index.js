import angular from 'angular';

let commonFiltersModule = angular.module('app.common.filters', [])
  .filter('paymentTotal', function () {
    return function (data, key1, key2) {
      if (typeof (data) === 'undefined' && typeof (key1) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum = sum + parseInt(data[i].rent[key1]) - (!isNaN(parseInt(data[i].rent[key2]))? parseInt(data[i].rent[key2]) : 0);
      }
      return sum;
    }
  })
.name;

export default commonFiltersModule;
