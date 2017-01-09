import angular from 'angular';
import uiRouter from 'angular-ui-router';
import clientComponent from './client.component';
import clientModal from './client.modal.controller';

let clientModule = angular.module('app.components.client', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('client', {
      url: '/client',
      component: 'client',
      data: {
        requiresAuth: true
      }
    });
})
.component('client', clientComponent)
.controller('clientModal',clientModal)
.name;

export default clientModule;
