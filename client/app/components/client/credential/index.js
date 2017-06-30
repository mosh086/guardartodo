import angular from 'angular';
import uiRouter from 'angular-ui-router';
import credentialComponent from './credential.component';

let credentialModule = angular.module('app.components.client.credential', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('credential', {
      url: '/client/credential/:id',
      component: 'credential',
      data: {
        requiresAuth: true
      }
    });
})
.component('credential', credentialComponent)

.name;

export default credentialModule;
