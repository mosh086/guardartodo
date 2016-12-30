import angular from 'angular';
import uiRouter from 'angular-ui-router';
import rentComponent from './rent.component';

let rentModule = angular.module('app.component.rent', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('rent', {
      url: '/rent',
      component: 'rent',
      data: {
        requiresAuth: true
      }
    });
})
.component('rent', rentComponent)

.name;

export default rentModule;
