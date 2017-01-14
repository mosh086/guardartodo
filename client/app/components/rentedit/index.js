import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './rentedit.controller';
import renteditComponent from './rentedit.component';

let renteditModule = angular.module('app.component.rentedit', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('renteditparams', {
      url: '/rentedit/:id',
      component: 'rentedit',
      data: {
        requiresAuth: true
      }
    })
    .state('rentedit', {
      url: '/rentedit',
      component: 'rentedit',
      data: {
        requiresAuth: true
      }
    });
})
.component('rentedit', renteditComponent)

.name;

export default renteditModule;
