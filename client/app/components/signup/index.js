import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';

let signupModule = angular.module('app.components.signup', [
  uiRouter
])

.component('signup', signupComponent)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('signup', {
      url: '/signup',
      component: 'signup',
      data: {
        requiresAuth: false
      }
    });
})
.name;

export default signupModule;
