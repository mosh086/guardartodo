import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('app.component.dashboard', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      component: 'dashboard',
      data: {
        requiresAuth: true
      }
    });
})
.component('dashboard', dashboardComponent)

.name;

export default dashboardModule;
