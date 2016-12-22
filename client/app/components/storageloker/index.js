import angular from 'angular';
import uiRouter from 'angular-ui-router';
import storagelokerComponent from './storageloker.component';
import storagelokerModal from './storageloker.modal.controller';

let storagelokerModule = angular.module('app.components.storageloker', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('storageloker', {
      url: '/storageloker',
      component: 'storageloker',
      data: {
        requiresAuth: true
      }
    });
})
.component('storageloker', storagelokerComponent)
.controller('storagelokerModal', storagelokerModal)
.name;

export default storagelokerModule;
