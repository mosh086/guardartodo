import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storagelokertypeComponent from './storagelokertype.component';

let storagelokertypeModule = angular.module('app.components.storagelokertype', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('storagelokertype', {
      url: '/storagelokertype',
      component: 'storagelokertype',
      data: {
        requiresAuth: false
      }
    });
})
.component('storagelokertype', storagelokertypeComponent)

.name;
storagelokertypeModule.$in
export default storagelokertypeModule;
