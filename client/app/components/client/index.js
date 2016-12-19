import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientComponent from './client.component';

let clientModule = angular.module('app.components.client', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('client', {
      url: '/client',
      component: 'client'
    });
})
.component('client', clientComponent)

.name;

export default clientModule;
