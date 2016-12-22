import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('app.components.home', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      data: {
        requiresAuth: false
      }
  });
})
.component('home', homeComponent)

.name;

export default homeModule;
