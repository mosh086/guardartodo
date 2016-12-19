import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signupComponent from './signup.component';

let signupModule = angular.module('app.components.signup', [
  uiRouter
])

.component('signup', signupComponent)

.name;

export default signupModule;
