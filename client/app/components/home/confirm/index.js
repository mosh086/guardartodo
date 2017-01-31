import angular from 'angular';
import uiRouter from 'angular-ui-router';
import confirmComponent from './confirm.component';

let confirmModule = angular.module('app.components.home.confirm', [
  uiRouter
])

.component('confirm', confirmComponent)

.name;

export default confirmModule;
