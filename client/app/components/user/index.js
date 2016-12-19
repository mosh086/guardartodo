import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userComponent from './user.component';

let userModule = angular.module('app.components.user', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('user', {
      url: '/user',
      component: 'user'
    });
})
.component('user', userComponent)

.name;

export default userModule;
