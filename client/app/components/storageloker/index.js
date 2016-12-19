import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storagelokerComponent from './storageloker.component';

let storagelokerModule = angular.module('app.components.storageloker', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('storageloker', {
      url: '/storageloker',
      component: 'storageloker'
    });
})
.component('storageloker', storagelokerComponent)

.name;

export default storagelokerModule;
