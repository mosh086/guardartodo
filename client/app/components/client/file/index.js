import angular from 'angular';
import uiRouter from 'angular-ui-router';
import fileComponent from './file.component';

let fileModule = angular.module('app.components.client.file', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('file', {
      url: '/client/file/:id',
      component: 'file',
      data: {
        requiresAuth: true
      }
    });
})
.component('file', fileComponent)

.name;

export default fileModule;
