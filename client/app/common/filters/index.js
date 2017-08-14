import angular from 'angular';

let commonFiltersModule = angular.module('app.common.filters', [])
  .filter('paymentTotal', function () {
    return function (data) {
      if (typeof (data) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        sum = sum + ((data[i].payment) ? parseFloat(data[i].payment) : 0);
      }
      return sum;
    }
  })
  .filter('costTotal', function () {
    return function (data, key1, key2) {
      if (typeof (data) === 'undefined' && typeof (key1) === 'undefined' && typeof (key2) === 'undefined') {
        return 0;
      }
      var sum = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].rent)
          sum = sum + parseFloat(data[i].rent[key1]) - (!isNaN(parseFloat(data[i].rent[key2]))? parseFloat(data[i].rent[key2]) : 0);
        else
          sum = sum + parseFloat(data[i].payment);

      }
      return sum;
    }
  })
.name;

export default commonFiltersModule;
