import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resetpasswordComponent from './resetpassword.component';

let resetpasswordModule = angular.module('app.component.resetpassword', [
  uiRouter
])
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('resetpassword', {
      url: '/reset?username',
      component: 'resetpassword',
      data: {
        requiresAuth: true
      }
    });
})
.component('resetpassword', resetpasswordComponent)

.name;

export default resetpasswordModule;
