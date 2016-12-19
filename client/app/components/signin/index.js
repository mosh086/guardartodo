import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signinComponent from './signin.component';

let signinModule = angular.module('app.components.signin', [
  uiRouter
])

.component('signin', signinComponent)

.name;

export default signinModule;
